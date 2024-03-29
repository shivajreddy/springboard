import { Button, TextField, Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import JoblyApi from "../utilities/joblyAPI";
import { decodeToken } from "react-jwt";
import { TokenContext } from "../context/appContext";
import { TokenType } from "../@types/token";
import { useNavigate } from "react-router-dom";

export interface IUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  applications: any[];
}

function Profile() {
  const { token, setToken } = useContext(TokenContext) as TokenType;
  const [userDetails, setUserDetails] = useState<IUser>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    applications: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function getCurrentUser() {
      try {
        if (token !== "null") {
          const { username } = decodeToken<any>(token);
          JoblyApi.token = token;
          const currentUser: IUser = await JoblyApi.getUser(username);
          setUserDetails({ ...currentUser, password: "" });
        }
      } catch (error) {
        console.error("Error Fetching user info", error);
      }
    }
    getCurrentUser();
    if (!token || token === "null") {
      navigate("/login");
    }
  }, [navigate, token]);

  function handleChange(e: any) {
    const { name, value } = e.currentTarget;
    setUserDetails({ ...userDetails, [name]: value } as Pick<
      IUser,
      keyof IUser
    >);
    return e.currentTarget.value;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let newDetails;
    if (userDetails) {
      newDetails = {
        password: userDetails.password,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
      };
      const updatedUser = await JoblyApi.updateUser(
        userDetails.username,
        newDetails
      );
      setUserDetails(updatedUser);
    }
  }

  if (token === "null" || token === null) {
    return <p>no user login</p>;
  } else {
    return (
      <>
        <Typography variant="h5" sx={{ margin: "10px" }}>
          Welcome back {userDetails?.firstName}!
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60vw",
            }}
          >
            <TextField
              name="username"
              sx={{ margin: "10px" }}
              label="Username"
              defaultValue="username"
              value={userDetails.username}
              onChange={(e) => e.target.value}
              disabled
            />
            <TextField
              name="firstName"
              sx={{ margin: "10px" }}
              label="First Name"
              defaultValue="First name"
              value={userDetails.firstName}
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              sx={{ margin: "10px" }}
              label="Last Name"
              value={userDetails?.lastName}
              onChange={handleChange}
              defaultValue="Last Name"
            />
            <TextField
              name="email"
              sx={{ margin: "10px" }}
              label="Email"
              value={userDetails?.email}
              onChange={handleChange}
              defaultValue="Email"
            />
            <TextField
              name="isAdmin"
              sx={{ margin: "10px" }}
              label="Admin"
              value={userDetails?.isAdmin}
              onChange={handleChange}
              disabled
              defaultValue="Is Admin?"
            />
            <TextField
              name="password"
              type="password"
              sx={{ margin: "10px" }}
              label="Confirm Password"
              value={userDetails?.password}
              onChange={handleChange}
              defaultValue="Password"
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
        <Button
          onClick={() => setToken(null)}
          sx={{ margin: "10px" }}
          variant="contained"
        >
          Logout
        </Button>
      </>
    );
  }
}

export default Profile;
