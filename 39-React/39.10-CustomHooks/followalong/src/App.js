import React, { useState, useEffect } from "react";
import axios from "axios";

function useToggleState(initialState = false) {
  const [currentState, setCurrentState] = React.useState(initialState);
  const toggle = () => setCurrentState((state) => !state);
  return [currentState, toggle];
}

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return localValue;
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
}

function Form() {
  const [localVal, setLocalValue] = useLocalStorageState("number", 420);
  function onNameChange(event) {
    setLocalValue(event.target.value);
  }
  return (
    <div>
      <label htmlFor="name"> Name: </label>
      <input value={localVal} onChange={onNameChange} id="name" />
    </div>
  );
}

function useFetch(url) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // make an async call
    async function makeAPIcall() {
      try {
        const resp = await axios.get(url);
        setResponse(resp.data);
        setError(null);
      } catch (error) {
        setResponse(null);
        setError(error);
      }
      setIsLoading(false);
    }
    makeAPIcall();
  }, [url]);

  return [response, error, isLoading];
}

function RandomAge() {
  const [response, error, isLoading] = useFetch(
    "https://api.agify.io?name=michael"
  );
  if (isLoading) return <div> Fetching API</div>;
  if (error)
    return (
      <div>
        <p>Code: {error.code}</p>
        <p>Message: {error.message}</p>
      </div>
    );
  return (
    <div>
      Name : {response.name}
      age : {response.age}
      count : {response.count}
    </div>
  );
}

function App() {
  const [state, toggleState] = useToggleState();
  const [isDarkMode, setIsDarkMode] = useToggleState(true);
  return (
    <div>
      <h2>{state ? "true" : "false"}</h2>
      <h2>{isDarkMode ? "DarkMode" : "LightMode"}</h2>
      <button onClick={toggleState}>change</button>
      <button onClick={setIsDarkMode}>Toggle Theme</button>
      <Form />
      <RandomAge />
    </div>
  );
}

export default App;
