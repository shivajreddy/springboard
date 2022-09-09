import { CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative" }}>
      <Card
        sx={{
          borderRadius: 4,
          height: 200,
          maxWidth: "320px",
          margin: "10px",
          textAlign: "start",
          transitionDuration: "0.1s",
          color: "custom1",
          // boxShadow: 25,
          ":hover": {
            boxShadow: 26,
          },
        }}
      >
        <CardMedia
          component="img"
          height="10"
          image="/images/demo.avif"
          alt="demo-img"
          sx={{
            opacity: theme.demoImageOpacity,
            filter: "alpha(opacity=40)",
          }}
        />

        <CardContent
          sx={{
            position: "absolute",
            overflow: "visible",
            top: 10,
            left: "10%",
            transform: "translateX(-50%)",
          }}
        >
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
