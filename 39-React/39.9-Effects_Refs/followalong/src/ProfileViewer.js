import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProfileViewer({ name = "mike", color = "red" }) {

  const [data, setData] = useState(null);

  const base = "https://cat-fact.herokuapp.com";

  const getFacts = async function () {
    const response = await axios.get(`${base}/facts`)
    const random = Math.floor(Math.random() * response.data.length)
    const result = response.data[random].text;
    console.log(result)
    setData(result);
  }

  function getApiData() {
    getFacts()
  }

  useEffect(getApiData, [color])

  // get github username
  const baseGit = "https://api.github.com/users/"

  const [user, setUser] = useState(null);

  const getUser = async function (username) {
    // console.log("Making a get request to", `${baseGit}${username}`)
    const response = await axios.get(`${baseGit}${username}`);
    setUser(response.data.name);
  }

  function getGitUser() {
    getUser(name)
  }

  useEffect(getGitUser, [name]);

  return (
    <div>
      <h2>Random Cat Fact</h2>
      <h3 style={{ backgroundColor: color }}>{data ? data : "Loading..."}</h3>

      <h2>Github Profile Viewer</h2>
      <h3>{user ? user : "Loading..."}</h3>

    </div>
  )
}

export default ProfileViewer