import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProfileViewer() {

  const [data, setData] = useState(null);

  const base = "https://cat-fact.herokuapp.com";

  const getFacts = async function () {
    const response = await axios.get(`${base}/facts`)
    const random = Math.floor(Math.random() * response.data.length)
    const result = response.data[random].text;
    setData(result);
  }

  function getApiData() {
    getFacts()
  }

  useEffect(getApiData, [])

  return (
    <div>
      <h2>Profile Viewer</h2>
      <h3>{data ? data : "Loading..."}</h3>
    </div>
  )
}

export default ProfileViewer