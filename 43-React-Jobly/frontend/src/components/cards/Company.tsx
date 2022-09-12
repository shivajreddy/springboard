import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export interface CompanyInterface {
  name?: string;
  handle?: string;
  numEmployees?: string | null;
  description?: string;
  logo_url?: string | null;
}

export function Company(props: CompanyInterface) {
  const theme = useTheme();
  const newBox = (
    <div
      className="card__main"
      style={{
        border: "0.1rem solid",
        margin: "5px",
        width: "80vw",
        display: "flex",
        height: "240px",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="card__image"
        style={{
          width: "35%",
        }}
      >
        <img
          src="/images/demo.avif"
          alt="demo"
          style={{
            opacity: theme.demoImageOpacity,
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="card__content"
        style={{
          width: "100%",
          textAlign: "start",
        }}
      >
        <div style={{ padding: "10px 30px 10px 20px" }}>
          <Typography variant="h5" fontWeight={600} padding="5px">
            {props.name}
          </Typography>
          <Divider />
          <Typography padding="5px">{props.description}</Typography>
          <div
            style={{
              display: "flex",
            }}
          >
            <PeopleAltIcon
              sx={{ verticalAlign: "middle", padding: "2px", marginTop: "4px" }}
            />
            <Typography padding="5px">{props.numEmployees}</Typography>
          </div>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            bottom: "0",
            padding: "10px 0px 10px 20px",
            backgroundColor: "gray",
            // border: "0.1rem solid red",
            width: "100%",
          }}
        >
          {props.handle}
        </div>
      </div>
    </div>
  );
  return newBox;
}
