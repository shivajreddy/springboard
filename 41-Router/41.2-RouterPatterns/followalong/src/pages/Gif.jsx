import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



function Gif() {

  let navigate = useNavigate();
  const { searchTerm } = useParams();
  const [src, setSrc] = useState(null);
  const [term, setTerm] = useState(null);

  useEffect(() => {
    async function getGif(searchTerm) {
      const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=6R5uDpWuODZVe4b5OQFoSCVURZ0GzuAW`)
      const random = Math.floor(Math.random() * response.data.data.length)
      setSrc(response.data.data[random].images.original.url);
    };
    getGif(term);
  }, [term]);

  const img = src ? <img src={src} alt={searchTerm} /> : null;

  const searchGif = (e) => {
    console.log('running searchGif function')
    e.preventDefault();
    const searchTerm = e.target[0].value;
    setTerm(searchTerm);
    navigate(`/gif/${searchTerm}`)
  }

  return (
    <div>
      <h3>gif for {searchTerm}</h3>
      <form onSubmit={searchGif}>
        <input type="text" name='inputSearch' />
        <button type='submit' >search</button>
      </form>
      {img}
    </div>
  )
}

export default Gif