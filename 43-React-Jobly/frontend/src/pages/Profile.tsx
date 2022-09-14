import React, { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import JoblyApi from "../utilities/joblyAPI";

function Profile() {
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    console.log(token);
    // console.log(jwt.decode(token));
    // JoblyApi.getUser();
    console.log("effect");
  }, []);

  return (
    <>
      <p>{token}</p>
      <h2>Profile page</h2>
    </>
  );
}

export default Profile;
