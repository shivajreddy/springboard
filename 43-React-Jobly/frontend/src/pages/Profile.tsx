import { Button, TextField } from "@mui/material";
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
  const [token] = useLocalStorage("token");
  const [userDetails, setUserDetails] = useState<IUser>();

  useEffect(() => {
    async function getCurrentUser() {
      try {
        if (token) {
          const { username } = decodeToken<any>(token);
          JoblyApi.token = token;
          const currentUser: IUser = await JoblyApi.getUser(username);
          setUserDetails({ ...currentUser, password: "" });
        }
      } catch (error) {
        console.error("Error Fetching user info", error);
        // setUserDetails({});
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
    console.log("this is the target", e.currentTarget);

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
  console.log("this is the user object state", userDetails);

  return (
    <>
      <p>{token}</p>
      <h2>Profile page</h2>
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
    </>
  );
}

export default Profile;
