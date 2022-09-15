import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PasswordIcon from "@mui/icons-material/Password";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import config from "../config.json";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LoginForm() {
  const [token, setToken] = useLocalStorage("token");
  /** Login */
  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = (
      e.currentTarget.elements.namedItem("form-username") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("form-password") as HTMLInputElement
    ).value;
    async function makeRequest() {
      const res = await axios.post(config.BASE_URL + "/auth/token", {
        username: username,
        password: password,
      });
      setToken(res.data.token);
    }
    makeRequest();
    return 21;
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
      onSubmit={login}
    >
      <Typography variant="h6" fontWeight={700}>
        Login
      </Typography>
      <div style={{ margin: "10px" }}>
        <AssignmentIndIcon sx={{ margin: "20px" }} />
        <TextField name="form-username" label="Username" variant="standard" />
      </div>
      <div style={{ margin: "10px" }}>
        <PasswordIcon sx={{ margin: "20px" }} />
        <TextField
          name="form-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <Button
        color="primary"
        variant="contained"
        sx={{ alignContent: "center" }}
        type="submit"
      >
        Log in
      </Button>
    </Box>
  );
}
