// Updated version fully aligned with ReporterApp logic and workflow
import { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Legend from "@arcgis/core/widgets/Legend";
import Graphic from "@arcgis/core/Graphic";
import "@arcgis/core/assets/esri/themes/light/main.css";

export default function InteractiveReporterApp() {
  const mapRef = useRef(null);
  const legendRef = useRef(null);
  const sketchRef = useRef(null);
  const graphicsLayerRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [drawnGeometry, setDrawnGeometry] = useState(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [comment, setComment] = useState("");
  const [isCenter, setIsCenter] = useState(false);

  useEffect(() => {
    const loadMap = async () => {
      const [MapView, WebMap, Sketch, GraphicsLayer] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
        import("@arcgis/core/widgets/Sketch"),
        import("@arcgis/core/layers/GraphicsLayer")
      ]);

      const webmap = new WebMap.default({
        portalItem: { id: "4b41859317b04d92af10398a0611bd38" },
      });

      const view = new MapView.default({
        container: mapRef.current,
        map: webmap,
        center: [-111.787301, 40.221715],
        zoom: 10.5,
        ui: { components: ["zoom", "attribution"] },
      });

      view.when(() => {
        view.popup.autoOpenEnabled = false;
        const graphicsLayer = new GraphicsLayer.default({ popupEnabled: false });
        graphicsLayerRef.current = graphicsLayer;
        view.map.add(graphicsLayer);

        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = "🛈 Use the +/- to zoom. Click and drag to pan.";
        infoDiv.style.padding = "6px 12px";
        infoDiv.style.background = "rgba(255, 255, 255, 0.9)";
        infoDiv.style.fontSize = "13px";
        infoDiv.style.borderRadius = "4px";
        infoDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        infoDiv.style.maxWidth = "200px";
        view.ui.add(infoDiv, "top-left");

        new Legend({ view, container: legendRef.current });

        const sketch = new Sketch.default({
          layer: graphicsLayer,
          view,
          creationMode: "single",
          updateOnGraphicClick: false,
          visibleElements: {
            createTools: { point: false, polyline: false, rectangle: false, circle: false },
            selectionTools: { "rectangle-selection": false },
            undoRedoMenu: false,
          },
          polygonSymbol: {
            type: "simple-fill",
            color: [0, 255, 255, 0.3],
            outline: { color: [0, 180, 180, 1], width: 2 },
          },
        });

        sketchRef.current = sketch;

        sketch.on("create", (event) => {
          if (event.state === "start") alert("Sketch mode: Click to place vertices. Double-click to finish the shape.");
          if (event.state === "complete") {
            const graphic = event.graphic;
            graphic.attributes = { feature_origin: 1 };
            sketch.update([graphic], { tool: "reshape" });
            setSelectedFeature(graphic);
            setDrawnGeometry(graphic.geometry);
            setOpen(true);
          }
        });

        view.on("click", async (event) => {
          const response = await view.hitTest(event);
          const result = response.results.find((r) => r.graphic?.geometry);

          if (result) {
            const graphic = result.graphic;
            const isDrawn = graphicsLayer.graphics.includes(graphic);

            if (isDrawn) {
              sketch.update([graphic], { tool: "reshape" });
              setSelectedFeature(graphic);
              setDrawnGeometry(graphic.geometry);
              setOpen(true);
            } else {
              const clonedGeometry = graphic.geometry.clone();
              const commentGraphic = new Graphic({
                geometry: clonedGeometry,
                attributes: {
                  feature_origin: 0,
                  OBJECTID: graphic.attributes?.OBJECTID,
                },
              });
              setSelectedFeature(commentGraphic);
              setDrawnGeometry(clonedGeometry);
              setOpen(true);
            }
          }
        });
      });
    };

    loadMap();
  }, []);

  const startDrawing = () => {
    if (sketchRef.current) sketchRef.current.create("polygon");
  };

  const handleSubmit = async () => {
    const [FeatureLayer] = await Promise.all([
      import("@arcgis/core/layers/FeatureLayer")
    ]);

    const responseLayer = new FeatureLayer.default({
      url: "https://services6.arcgis.com/MLUVmF7LMfvzoHjV/arcgis/rest/services/OpenSpaceResponses/FeatureServer/0",
    });

    const geometry = selectedFeature?.geometry || drawnGeometry;
    if (!geometry) return;

    const newFeature = {
      geometry,
      attributes: {
        feature_origin: selectedFeature?.attributes?.feature_origin || 0,
        name,
        organization,
        submittedcomment: comment,
        is_center: isCenter ? 1 : 0,
        submitted_at: new Date().toISOString(),
        related_feature_id: selectedFeature?.attributes?.OBJECTID || null
      },
    };

    try {
      const result = await responseLayer.applyEdits({ addFeatures: [newFeature] });
      if (result.addFeatureResults.length > 0 && !result.addFeatureResults[0].error) {
        alert("Feature submitted successfully!");
      } else {
        alert("Submission failed.");
        console.error(result);
      }
    } catch (error) {
      console.error("Error submitting feature:", error);
    }

    setOpen(false);
    if (sketchRef.current && graphicsLayerRef.current?.graphics.includes(selectedFeature)) {
      sketchRef.current.layer.remove(selectedFeature);
    }
    setName("");
    setComment("");
    setSelectedFeature(null);
    setDrawnGeometry(null);
    setIsCenter(false);
    setOrganization("");
  };

  const isUserCreatedFeature = selectedFeature && graphicsLayerRef.current?.graphics.includes(selectedFeature);

  const handleDeleteSketch = () => {
    if (isUserCreatedFeature && sketchRef.current) {
      sketchRef.current.layer.remove(selectedFeature);
    }
    setOpen(false);
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4} pb={2}>
      <Box width="100%" maxWidth="1250px">
        <Typography variant="h4" gutterBottom>
          MAG First Draft Parks and Open Space Map Feedback
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary" onClick={startDrawing}>
            Add A Feature
          </Button>
        </Box>

        <Card sx={{ my: 2, mb: 1 }}>
          <CardContent sx={{ height: 450, display: 'flex', position: 'relative' }}>
            <div ref={mapRef} style={{ width: "80%", height: "100%", borderRadius: 2, position: "relative" }} />
            <div ref={legendRef} style={{ width: "20%", minWidth: 200, paddingLeft: 10, overflowY: "auto" }} />
          </CardContent>
        </Card>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 360, pt: 2, px: 2, pb: 1 }} role="presentation">
            <DialogTitle>Feature Feedback</DialogTitle>
            <DialogContent>
              <TextField label="Your Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label="Your City/Organization" fullWidth margin="dense" value={organization} onChange={(e) => setOrganization(e.target.value)} />
              <FormControlLabel control={<Checkbox checked={isCenter} onChange={(e) => setIsCenter(e.target.checked)} />} label="This feature could be considered regionally significant open space." />
              <TextField label="Comment Here (Optional)" fullWidth margin="dense" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)} />
            </DialogContent>
            <DialogActions>
              {isUserCreatedFeature && <Button onClick={handleDeleteSketch} color="secondary">DELETE SKETCH</Button>}
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">Submit Feedback</Button>
            </DialogActions>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
