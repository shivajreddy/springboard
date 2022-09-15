import "../styles/RegisterForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import config from "../config.json";
import useLocalStorage from "../hooks/useLocalStorage";

export default function RegisterForm() {
  /** Register a new user */
  let username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    token: string | null;

  // local storage
  const [localStorageToken, setLocalStorageToken] = useLocalStorage("token");
  console.log("this is the local storage token", localStorageToken);

  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(
      "this is the formData",
      formData,
      Object.fromEntries(formData.entries())
    );
    username = (
      e.currentTarget.elements.namedItem("form-username") as HTMLInputElement
    ).value;
    password = (
      e.currentTarget.elements.namedItem("form-password") as HTMLInputElement
    ).value;
    firstName = (
      e.currentTarget.elements.namedItem("form-first-name") as HTMLInputElement
    ).value;
    lastName = (
      e.currentTarget.elements.namedItem("form-last-name") as HTMLInputElement
    ).value;
    email = (
      e.currentTarget.elements.namedItem("form-email") as HTMLInputElement
    ).value;
    console.log(username, password, firstName, lastName, email);

    async function makeRequest() {
      try {
        const res = await axios.post(config.BASE_URL + "/auth/register", {
          username,
          password,
          firstName,
          lastName,
          email,
        });
        console.log("this is the response", res);
        token = res.data.token;
        setLocalStorageToken(token);
      } catch (error) {
        console.error(error);
      }
    }
    makeRequest();
  }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
        alignItems: "center",
      }}
      autoComplete="off"
      onSubmit={register}
    >
      <Typography variant="h6" fontWeight={700}>
        Register
      </Typography>
      <div style={{ margin: "10px" }}>
        <AssignmentIndIcon sx={{ margin: "20px" }} />
        <TextField name="form-username" label="Username" variant="standard" />
      </div>
      <div style={{ margin: "10px" }} className="error">
        <PasswordIcon sx={{ margin: "20px" }} />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <BadgeIcon sx={{ margin: "20px" }} />
        <TextField name="firstName" label="First name" variant="standard" />
      </div>
      <div style={{ margin: "10px" }}>
        <BadgeIcon sx={{ margin: "20px" }} />
        <TextField name="lastName" label="Last name" variant="standard" />
        <p></p>
      </div>
      <div style={{ margin: "10px" }}>
        <EmailIcon sx={{ margin: "20px" }} />
        <TextField name="email" label="Email" variant="standard" />
      </div>
      <Button
        color="primary"
        variant="contained"
        sx={{ width: "20vw", alignContent: "center" }}
        type="submit"
      >
        Log in
      </Button>
    </Box>
  );
}
