import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

function useFlipCard(defaultState = false) {
  const [status, setStatus] = useState(defaultState);
  const flipCard = () => setStatus((status) => !status);
  return [status, flipCard];
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
    localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
}

function reducer(state, action) {
  switch (action.type) {
    case "card-api":
      // const [responses, setResponses] = useState([]);
      async function addCard() {
        const response = await axios.get(
          "https://deckofcardsapi.com/api/deck/new/draw/"
        );
        const newCardObject = {
          id: response.data.deck_id,
          image: response.data.cards[0].image,
        };
        return () => [...state, newCardObject];
      }
      return addCard();

    case "pokemon-api":
      console.log("reached pokemon reducer");
      // const [pokemon, setPokemon] = useState([]);
      const url = `https://pokeapi.co/api/v2/pokemon/${action.pokemon_name}/`;
      const addPokemon = async () => {
        const response = await axios.get(url);
        // setPokemon((pokemon) => [...pokemon, { ...response.data, id: uuid() }]);
        return [...state, { ...response.data }];
      };
      return addPokemon();

    default:
      throw new Error(`Cant find action type ${action.type}`);
  }
}

function useAxios(keyInLS, baseUrl) {
  const [responses, dispatch] = useReducer(reducer, []);
  const addResponses = ({ type }) => dispatch({ type });

  // const [responses, setResponses] = useState([]);
  // async function addCard() {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   const deck_id = response.data.deck_id;
  //   const image_url = response.data.cards[0].image;
  //   const newCardObject = { id: response.data.deck_id, image: image_url };
  //   setResponses((oldCards) => [...oldCards, newCardObject]);
  // }
  // const [responses, setResponses] = useLocalStorage(keyInLS);

  // const makeAxiosCall = async () => {
  //   const response = await axios.get(baseUrl);
  //   console.log("this is the response", response);
  //   const deck_id = response.data.deck_id;
  //   const image_url = response.data.cards[0].image;
  //   setResponses((old_data) => {
  //     const new_data = [old_data];
  //     new_data.push({ id: deck_id, image: image_url });
  //     console.log("the data is", new_data);
  //     return new_data;
  //   });
  // };

  // const clearResponses = () => setResponses([]);

  return [responses, addResponses];
}

export { useFlipCard, useLocalStorage, useAxios };
