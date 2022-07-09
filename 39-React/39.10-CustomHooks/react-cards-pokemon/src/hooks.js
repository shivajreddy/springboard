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

  async function addState() {
    const response = await axios.get(url);
    setState((prevState) => [...prevState, { ...response.data, id: uuid() }]);
  }

  function resetState() {
    setState([]);
  }

  return [state, addState, resetState];
}

export { useFlip, useAxios };
