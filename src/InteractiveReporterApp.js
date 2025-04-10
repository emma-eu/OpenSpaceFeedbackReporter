// NOTE: This update ensures the layout mirrors the OpenSpaceFeedbackReporter app: static textbox, zoom top-left, and sidebar legend — with extra tools removed.

import { useEffect, useRef, useState } from "react";
// Material UI components for layout and UI
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
import "@arcgis/core/assets/esri/themes/light/main.css";

export default function InteractiveReporterApp() {
  const mapRef = useRef(null);
  const legendRef = useRef(null);
  const sketchRef = useRef(null);
  const [, setView] = useState(null);

  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [drawnGeometry, setDrawnGeometry] = useState(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [comment, setComment] = useState("");
  const [isCenter, setisCenter] = useState(false);

  useEffect(() => {
    const loadMap = async () => {
      const [MapView, WebMap, Sketch, GraphicsLayer, Graphic] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
        import("@arcgis/core/widgets/Sketch"),
        import("@arcgis/core/layers/GraphicsLayer"),
        import("@arcgis/core/Graphic")
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

      setView(view);

      view.when(async () => {
        view.popup.autoOpenEnabled = false;
        const graphicsLayer = new GraphicsLayer.default({ popupEnabled: false });
        view.map.add(graphicsLayer);

        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = "🛈 Use the +/- or two fingers on your trackpad to zoom. Click and drag to pan.";
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
            undoRedoMenu: false
          },
          defaultUpdateOptions: {
            tool: "reshape",
            enableRotation: false,
            enableScaling: false,
            preserveAspectRatio: false,
            multipleSelectionEnabled: false
          },
          polygonSymbol: {
            type: "simple-fill",
            color: [0, 255, 255, 0.3],
            outline: { color: [0, 180, 180, 1], width: 2 }
          }
        });

        sketchRef.current = sketch;

        sketch.on("create", (event) => {
          if (event.state === "start") {
            alert("Sketch mode: Click to place vertices. Double-click to finish the shape.");
          }
          if (event.state === "complete") {
            const userGraphic = event.graphic;
            userGraphic.attributes = { feature_origin: 1 };
            sketch.update([userGraphic], {
              tool: "reshape"
            });
            setSelectedFeature(userGraphic);
            setDrawnGeometry(userGraphic.geometry);
            setOpen(true);
          }
        });

        view.on("click", async (event) => {
          const response = await view.hitTest(event);
          const result = response.results.find((r) => r.graphic?.geometry);

          if (result) {
            const graphic = result.graphic;
            const isDrawn = graphic.attributes?.feature_origin === 1;

            if (isDrawn) {
              setSelectedFeature(graphic);
              setDrawnGeometry(graphic.geometry);
              setOpen(true);
            } else {
              const clonedGeometry = graphic.geometry.clone();
              const commentGraphic = new Graphic.default({
                geometry: clonedGeometry,
                attributes: {
                  feature_origin: 0,
                  OBJECTID: graphic.attributes?.OBJECTID
                }
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
    if (sketchRef.current && selectedFeature?.attributes?.feature_origin === 1) {
      sketchRef.current.layer.remove(selectedFeature);
    }
    setName("");
    setComment("");
    setSelectedFeature(null);
    setDrawnGeometry(null);
    setisCenter(false);
    setOrganization("");
  };

  const isUserCreatedFeature = selectedFeature?.attributes?.feature_origin === 1;
  const handleDeleteSketch = () => {
    if (
      selectedFeature &&
      selectedFeature.attributes?.feature_origin === 1 &&
      !selectedFeature.attributes?.OBJECTID &&
      sketchRef.current
    ) {
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
          MAG First Draft Open Space Map Feedback
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
            <DialogTitle>Center Comment Form</DialogTitle>
            <DialogContent>
              <TextField label="Your Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label="Your City/Organization" fullWidth margin="dense" value={organization} onChange={(e) => setOrganization(e.target.value)} />

              {!isUserCreatedFeature && (
                <FormControlLabel control={<Checkbox checked={isCenter} onChange={(e) => setisCenter(e.target.checked)} />} label="This feature could be considered regionally significant open space." />
              )}

              <TextField label="Comment Here (Optional)" fullWidth margin="dense" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)} />
            </DialogContent>
            <DialogActions>
              {isUserCreatedFeature && <Button onClick={handleDeleteSketch} color="secondary">DELETE SKETCH</Button>}
              <Button onClick={() => {
                setOpen(false);
                if (
                  sketchRef.current &&
                  selectedFeature?.attributes?.feature_origin === 1 &&
                  sketchRef.current.layer.graphics.includes(selectedFeature)
                ) {
                  sketchRef.current.layer.remove(selectedFeature);
                }
                setSelectedFeature(null);
                setDrawnGeometry(null);
              }}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">Submit Feedback</Button>
            </DialogActions>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
