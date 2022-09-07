import * as React from "react";
import "styles/CompanyCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CompanyCard(props) {
  const { name, description, numEmployees, logoUrl } = props.details;
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 250,
        backgroundColor: "dimgrey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* <p>{logoUrl}</p> */}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="white">
          {name}
        </Typography>
        <Typography variant="body2" color="white">
          Description:{description}
        </Typography>
        <Typography variant="body3" color="white">
          #Employees: {numEmployees}
        </Typography>
        <p>{logoUrl}</p>
      </CardContent>
    </Card>
  );
}
