import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
      Word of the Day
    </Typography>
    <Typography variant="h5" component="div"></Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      adjective
    </Typography>
    <Typography variant="body2">
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
);

export default function Company() {
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: "#2d2d2d",
          borderRadius: 2,
          height: 200,
          maxWidth: "320px",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
