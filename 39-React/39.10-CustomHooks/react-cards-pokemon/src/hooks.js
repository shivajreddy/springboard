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
function useAxios(keyForLs, url) {
  // const [state, setState] = React.useState([]);
  const [state, setState] = useLocalStorage(keyForLs);

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

// Custom useLocalStorage Hook
function useLocalStorage(key, defaultValue = []) {
  const [state, setState] = React.useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return JSON.parse(localValue);
    }
    return defaultValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export { useFlip, useAxios };
