import { CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

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
          width: 900,
          height: 318,
          margin: "10px",
          textAlign: "start",
          transitionDuration: "0.1s",
          color: "custom1",
          // boxShadow: 25,
          ":hover": {
            // border: "1px solid rgb(233,30,99)",
            border: "custom2",
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
            width: "100%",
            height: "60%",
            objectFit: "cover",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            overflow: "visible",
            top: "59%",
            transform: "translateX(-50%)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              width: "100%",
            }}
          >
            <Typography variant="h5" fontWeight={700} color="custom1">
              {props.compDetails.name}
            </Typography>
            {props.compDetails.num_employees && (
              <div>
                <PeopleAltIcon fontSize="small" sx={{ paddingTop: "4px" }} />
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.primary"
                  display="flex"
                  alignContent="center"
                >
                  {props.compDetails.num_employees}
                </Typography>
              </div>
            )}
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              About: {props.compDetails.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
