import { Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import JoblyApi from "../utilities/joblyAPI";
import { decodeToken } from "react-jwt";

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
  const [token, setToken] = useLocalStorage("token");
  const [userDetails, setUserDetails] = useState<IUser>();

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
  }, [token]);

  function handleChange(e: any) {
    const { name, value } = e.currentTarget;
    setUserDetails({ ...userDetails, [name]: value } as Pick<
      IUser,
      keyof IUser
    >);
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

  // TODO return to login page
  // console.log("this is the token", token, typeof token);
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
              value={userDetails?.username}
              disabled
              focused
            />
            <TextField
              name="firstName"
              sx={{ margin: "10px" }}
              label="First Name"
              value={userDetails?.firstName}
              onChange={handleChange}
              defaultValue="First name"
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
