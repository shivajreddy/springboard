import React, { useState, useEffect } from 'react';
import './App.css';
import Count from './Count';
import Timer from './Timer';
import ProfileViewer from './ProfileViewer';
import GithubProfile from './GithubProfile';
import axios from 'axios';

function App() {

  const baseGit = "https://api.github.com/users/"

  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState(baseGit);

  async function search(usrname) {
    // const response = await axios.get(`${baseGit}${usrname}`);
    // console.log("got from child", usrname);
    // return response.data.name;
    setUrl(`${baseGit}${usrname}`)
  }

  useEffect(() => {

    async function loadProfile() {
      const res = await axios.get(url);
      return res.data.name;
    }
    setProfile(loadProfile())

  }, [url])


  return (
    <>
      <h1>Use Effects & use Ref</h1>
      {/* <Count /> */}
      {/* <Timer start={10} color="blue" /> */}

      {/* <ProfileViewer name='mark' color='pink' /> */}
      {profile ? <h2>profile</h2> : <h2>"loading..."</h2>}
      <GithubProfile
        username="shivajreddy"
        color="pink"
        search={search}
      />


    </>
  );
}

export default App;
