import React from "react";
import "NewItem.css";
import SnackOrBoozeApi from "Api";
import { useNavigate } from "react-router-dom";

function NewItem({ type }) {
  const itemType = type === "drink" ? "Drink" : "Snack";
  const navigate = useNavigate();

  // controlled form values
  // const [id, setId] = React.useState("");
  // const [name, setName] = React.useState("");
  // const [description, setDescription] = React.useState("");
  // const [recipe, setRecipe] = React.useState("");
  // const [serve, setServe] = React.useState("");
  const [id, setId] = React.useState("idval");
  const [name, setName] = React.useState("nameval");
  const [description, setDescription] = React.useState("descval");
  const [recipe, setRecipe] = React.useState("recipeval");
  const [serve, setServe] = React.useState("serveval");

  function handleFormSubmission(event) {
    event.preventDefault();
    if (!id || !name || !description || !recipe || !serve) return;
    const newItem = { id, name, description, recipe, serve };
    if (itemType === "Drink") {
      const result = SnackOrBoozeApi.addDrink(newItem);
      console.log(result);
      return navigate("/drinks");
    } else {
      const result = SnackOrBoozeApi.addSnack(newItem);
      console.log(result);
      return navigate("/snacks");
    }
  }

  return (
    <div className="NewItem">
      {/* <h2>Add a new {itemType} Item</h2> */}
      <form className="NewItem-form">
        <label htmlFor="item-id">{itemType} Id</label>
        <input
          id="item-id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="item-name">{itemType} Name</label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="item-description">{itemType} Description</label>
        <input
          id="item-description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="item-recipe">{itemType} Recipe</label>
        <input
          id="item-recipe"
          type="text"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
        <label htmlFor="item-serve">{itemType} Serve</label>
        <input
          id="item-serve"
          type="text"
          value={serve}
          onChange={(e) => setServe(e.target.value)}
        />
        <button onClick={handleFormSubmission}>Add</button>
      </form>
    </div>
  );
}

export default NewItem;
