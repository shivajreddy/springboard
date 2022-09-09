import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Details {
  compDetails: {
    handle: string;
    name: string;
    num_employees: string | null;
    description: string;
    logo_url: string | null;
  };
}

export function Company(props: Details) {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: 4,
          height: 200,
          maxWidth: "320px",
          margin: "10px",
          transitionDuration: "0.1s",
          color: "custom1",
          // boxShadow: 25,
          ":hover": {
            boxShadow: 26,
          },
        }}
      >
        <CardContent>
          <p className="text-2xl font-bold">{props.compDetails.name}</p>
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
      </Card>
    </Box>
  );
}
