import { Typography, Button } from "@mui/material";

function Company() {
  return (
    <>
      <h3>Title:</h3>
      <p>hi</p>
      <Typography variant="body1" color="textSecondary">
        Typography test body 1
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Typography test body 2
      </Typography>
      <Typography
        variant="h5"
        color="primary"
        sx={{
          fontFamily: "Source Sans Pro",
          fontWeight: "600",
        }}
      >
        Typography test h1
      </Typography>
      <Button color="primary">hi</Button>
    </>
  );
}

export default Company;
