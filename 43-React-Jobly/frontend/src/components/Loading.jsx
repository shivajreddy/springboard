import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        placeContent: "center",
        margin: "20px",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <LinearProgress />
      </Box>
    </div>
  );
}
