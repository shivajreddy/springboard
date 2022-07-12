import React, { useState, useEffect } from 'react'
import axios from 'axios'

function GithubProfile({ username = "shivajreddy", color, search }) {

  const [formName, setFormName] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormName(value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    search(formName);
    // getUser(formName)

    setFormName("");
  }

  const [name, setName] = useState(null);

  async function getUser(usrname) {
    const baseGit = "https://api.github.com/users/"
    const response = await axios.get(`${baseGit}${usrname}`);
    console.log('making a request')
    setName(response.data.name);
  }

  function loadName() {
    getUser(username)
  }

  useEffect(loadName, [username]);


  return (
    <div>
      <form typeof='submit'>
        <label htmlFor="name">username</label>
        <input
          id="name"
          name="formName"
          value={formName}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>get</button>
      </form>

      <h2 style={{ backgroundColor: color }}>FullName:{name}</h2>
    </div>
  )
}

export default GithubProfile