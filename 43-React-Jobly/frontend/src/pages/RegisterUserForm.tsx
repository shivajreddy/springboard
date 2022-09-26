import "../styles/RegisterForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { TokenContext } from "../context/appContext";
import { TokenType } from "../@types/token";
import JoblyApi from "../utilities/joblyAPI";
import { UserType } from "../@types/user";

export default function RegisterForm() {
  /** Register a new user */
  let newUser: UserType = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const { token, setToken } = useContext(TokenContext) as TokenType;
  console.log("this is the token", token);

  async function signUp(signUpData: UserType) {
    try {
      let new_token = await JoblyApi.signUp(signUpData);
      setToken(new_token);
      return { success: true };
    } catch (error) {
      console.error("Sign-up Failed", error);
      return { success: false, error };
    }
  }

  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(
      "this is the formData",
      formData,
      Object.fromEntries(formData.entries())
    );
    newUser = Object.fromEntries(formData.entries()) as UserType;
    console.log("this is the newUser", newUser);
    signUp(newUser);
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
        <TextField name="username" label="Username" variant="standard" />
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
