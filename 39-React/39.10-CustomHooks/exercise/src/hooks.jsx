import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

function useFlipCard(defaultState = false) {
  const [status, setStatus] = useState(defaultState);
  const flipCard = () => setStatus((status) => !status);
  return [status, flipCard];
}

function useAxios(key, url) {
  const [pokemon, setPokemon] = useState([]);
  const addPokemon = async (name) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    setPokemon((pokemon) => [...pokemon, { ...response.data, id: uuid() }]);
  };

  const [val, setVal] = useLocalStorage(key);

  const [data, setData] = useState([]);
  const addCard = async () => {
    const response = await axios.get(url);
    setData((cards) => [...cards, { ...response.data, id: uuid() }]);
  };
  return [addCard, data];
}

function useLocalStorage(key, defaultValue = "") {
  const [state, setState] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return localValue;
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key);
  }, [key]);
  return [state, setState];
}

export { useFlipCard, useAxios };

function useSPRINGBOARDAxios(keyInLS, baseUrl) {
  const [responses, setResponses] = useLocalStorage(keyInLS);

  const addResponseData = async (
    formatter = (data) => data,
    restOfUrl = ""
  ) => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses((data) => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}
