import { Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import BalanceIcon from "@mui/icons-material/Balance";

export interface JobInterface {
  id: number;
  title: string;
  salary?: number | null;
  equity?: number | null;
  companyHandle: string;
}

export function Job(props: JobInterface) {
  const newBox = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="card__main"
        style={{
          border: "0.1rem solid",
          margin: "5px",
          width: "60vw",
          display: "flex",
          height: "220px",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="card__content"
          style={{
            width: "100%",
            textAlign: "start",
          }}
        >
          <div style={{ padding: "10px 30px 10px 20px" }}>
            <Typography variant="h6" fontWeight={400} padding="5px">
              {props.title}
            </Typography>
            <Divider />
            <div
              style={{
                display: "flex",
              }}
            >
              <PaidIcon
                sx={{
                  verticalAlign: "middle",
                  padding: "2px",
                  marginTop: "4px",
                }}
              />
              <Typography padding="5px">{props.salary}</Typography>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <BalanceIcon
                sx={{
                  verticalAlign: "middle",
                  padding: "2px",
                  marginTop: "4px",
                }}
              />
              <Typography padding="5px">{props.equity}</Typography>
            </div>
          </div>
          <Button
            color="primary"
            variant="outlined"
            style={{ marginLeft: "30px" }}
          >
            Apply
          </Button>
          <div
            className=""
            style={{
              position: "absolute",
              bottom: "0",
              padding: "10px 0px 10px 20px",
              backgroundColor: "gray",
              width: "100%",
            }}
          >
            {props.id} | {props.companyHandle}
          </div>
        </div>
      </div>
    </div>
  );
  return newBox;
}
