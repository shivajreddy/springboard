import * as React from "react";
import "styles/CompanyCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function JobCard(props) {
  const { id, title, salary, equity, companyHandle, companyName } =
    props.details;

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
      <CardContent>
        <p>{id}</p>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {companyName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          Salary:${salary}
        </Typography>
        <Typography variant="body3" color="white">
          Equity: {equity}
        </Typography>
        <p>{companyHandle}</p>
      </CardContent>
    </Card>
  );
}
