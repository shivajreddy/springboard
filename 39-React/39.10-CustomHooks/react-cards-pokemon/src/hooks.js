import * as React from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

// Custom useFlip Hook
function useFlip(defaultFlipState = true) {
  const [state, toggleState] = React.useState(defaultFlipState);
  function toggle() {
    toggleState((current) => !current);
  }
  return [state, toggle];
}

// Custom useAxios Hook
function useAxios(url) {
  const [state, setState] = React.useState([]);

  async function addState(pokemonName) {
    if (pokemonName) {
      const response = await axios.get(`${url}${pokemonName}`);
      setState((prevState) => [...prevState, { ...response.data, id: uuid() }]);
    } else {
      const response = await axios.get(url);
      console.log("this is the response from useAxios hook", response);
      setState((prevState) => [...prevState, { ...response.data, id: uuid() }]);
    }
  }

  function resetState() {
    setState([]);
  }

  return [state, addState, resetState];
}

export { useFlip, useAxios };
