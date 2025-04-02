// NOTE: This update fixes the Sketch activation logic so the "Add A Feature" button allows users to start drawing a polygon immediately

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
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Legend from "@arcgis/core/widgets/Legend"; // ArcGIS Legend widget
import "@arcgis/core/assets/esri/themes/light/main.css"; // ArcGIS CSS theme

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
      const [MapView, WebMap, Sketch, GraphicsLayer] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
        import("@arcgis/core/widgets/Sketch"),
        import("@arcgis/core/layers/GraphicsLayer"),
      ]);

      const webmap = new WebMap.default({
        portalItem: { id: "4b41859317b04d92af10398a0611bd38" },
      });

      const view = new MapView.default({
        container: mapRef.current,
        map: webmap,
        center: [-111.787301, 40.221715],
        zoom: 10.5,
      });

      setView(view);

      view.when(async () => {
        const legend = new Legend({ view });
        if (legendRef.current) legend.container = legendRef.current;

        const graphicsLayer = new GraphicsLayer.default();
        view.map.add(graphicsLayer);

        const sketch = new Sketch.default({
          layer: graphicsLayer,
          view,
          creationMode: "single",
          visibleElements: {
            createTools: { point: false, polyline: false, rectangle: false, circle: false },
            selectionTools: { "rectangle-selection": false },
            undoRedoMenu: false
          },
          polygonSymbol: {
            type: "simple-fill",
            color: [0, 255, 255, 0.3],
            outline: {
              color: [0, 180, 180, 1],
              width: 2
            }
          }
        });

        sketchRef.current = sketch;
        view.ui.add(sketch, "top-right");

        sketch.on("create", (event) => {
          if (event.state === "start") {
            alert("Sketch mode: Click to place vertices. Double-click to finish the shape.");
          }
          if (event.state === "complete") {
            setDrawnGeometry(event.graphic.geometry);
            setSelectedFeature(null);
            setOpen(true);
          }
        });

        view.on("click", async (event) => {
          const response = await view.hitTest(event);
          const result = response.results.find((r) => r.graphic?.attributes);
          if (result) {
            setSelectedFeature(result.graphic);
            setDrawnGeometry(null);
            setOpen(true);
          }
        });
      });
    };

    loadMap();
  }, []);

  const startDrawing = () => {
    if (sketchRef.current) {
      sketchRef.current.create("polygon");
    }
  };

  const handleSubmit = async () => {
    const [FeatureLayer] = await Promise.all([
      import("@arcgis/core/layers/FeatureLayer"),
    ]);

    const responseLayer = new FeatureLayer.default({
      url: "https://services6.arcgis.com/MLUVmF7LMfvzoHjV/arcgis/rest/services/OpenSpaceResponses/FeatureServer",
    });

    const geometry = selectedFeature?.geometry || drawnGeometry;
    if (!geometry) return;

    const newFeature = {
      geometry,
      attributes: {
        feature_origin: drawnGeometry ? 1 : 0,
        name,
        organization,
        submittedcomment: comment,
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
    setName("");
    setComment("");
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4} pb={2}>
      <Box width="100%" maxWidth="1250px">
        <Typography variant="h4" gutterBottom>
          MAG First Draft Centers Map Feedback
        </Typography>
        <Typography variant="body1" gutterBottom>
          To leave feedback, click a feature on the map to leave a comment on that feature, or draw a new feature.
        </Typography>

        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary" onClick={startDrawing}>
            Add A Feature
          </Button>
          <Button variant="contained" color="primary" onClick={() => alert("Click a feature on the map to comment.")}> 
            Comment on an Existing Feature
          </Button>
        </Box>

        <Card sx={{ my: 2, mb: 1 }}>
          <CardContent sx={{ height: 450, display: 'flex' }}>
            <div ref={mapRef} style={{ width: "80%", height: "100%", borderRadius: 2 }} />
            <div ref={legendRef} style={{ width: "20%", minWidth: 200, paddingLeft: 10, overflowY: "auto" }} />
          </CardContent>
        </Card>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 360, pt: 2, px: 2, pb: 1 }} role="presentation">
            <DialogTitle>Feature Feedback</DialogTitle>
            <DialogContent>
              <TextField label="Your Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label="Your City/Organization" fullWidth margin="dense" value={organization} onChange={(e) => setOrganization(e.target.value)} />
              <TextField label="Add Your Comment Here (Optional)" fullWidth margin="dense" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)} />
              <FormControlLabel control={<Checkbox checked={isCenter} onChange={(e) => setisCenter(e.target.checked)} />} label="This feature could be considered regionally significant open space." />
            </DialogContent>
            <DialogActions>
              {drawnGeometry && sketchRef.current && (
                <Button color="error" onClick={() => {
                  const layer = sketchRef.current.layer;
                  layer.removeAll();
                  setDrawnGeometry(null);
                  setOpen(false);
                }}>
                  Delete Feature
                </Button>
              )}
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">Submit Feedback</Button>
            </DialogActions>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}