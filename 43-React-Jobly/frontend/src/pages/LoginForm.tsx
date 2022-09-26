import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PasswordIcon from "@mui/icons-material/Password";
import { Button, Typography } from "@mui/material";
import JoblyApi from "../utilities/joblyAPI";
import { IUser } from "./Profile";
import { useContext, useEffect, useState } from "react";
import { TokenType } from "../@types/token";
import { TokenContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { token, setToken } = useContext(TokenContext) as TokenType;
  const [formErrors, setFormErrors] = useState<any>([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (token && token !== "null") {
      navigate("/profile");
    }
  });

  async function login(data: Pick<IUser, "username" | "password">) {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("login failed", error);
      return { success: false, error };
    }
  }

  /** Handle form submission */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = (
      e.currentTarget.elements.namedItem("username") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;
    console.log(username, password);
    // let result = await login()
    const result = await login(formData);
    if (!result.success) {
      setFormErrors(result.error);
    }
    console.log("this is the result on line 43 in loginform component", result);
  }
  // console.log("these are the errors", formErrors);

  /** Handle form change events */
  function handleChange(e: any) {
    // e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  // TODO redirect to user page if already logged in
  // console.log("token found in login form", token, typeof token);
  if (token === "null" || token === null) {
    return (
      <>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
            alignItems: "center",
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" fontWeight={700}>
            Login
          </Typography>
          <div style={{ margin: "10px" }}>
            <AssignmentIndIcon sx={{ margin: "20px" }} />
            <TextField
              name="username"
              label="Username"
              variant="standard"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <PasswordIcon sx={{ margin: "20px" }} />
            <TextField
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={formData.password}
              onChange={handleChange}
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
          {formErrors.length ? (
            <p className="text-red-800">{formErrors}</p>
          ) : null}
        </Box>
      </>
    );
  } else {
    return <p>Already logged in</p>;
  }
}
