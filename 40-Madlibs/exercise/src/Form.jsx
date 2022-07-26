import React from "react";
import LabelInput from "LabelInput";
import "Form.css";

// Prompts object
const prompts = {
  noun: "",
  noun2: "",
  adjective: "",
  color: "",
};

function generateInputs() {
  const result = [];
  for (let k of Object.keys(prompts)) {
    result.push(
      <LabelInput id={k} key={k} type="text" labelText={k}></LabelInput>
    );
  }
  return result;
}

function Form() {
  const [story, setStory] = React.useState();
  function handleSubmission(event) {
    event.preventDefault();

    // Set the values of prompts object to the input value of the form
    for (let idx = 0; idx < Object.keys(prompts).length; idx++) {
      const key = Object.keys(prompts)[idx];
      if (!event.target.elements[key].value) return;
      prompts[key] = event.target.elements[key].value;
    }

    setStory(
      `There was a ${prompts.color} ${prompts.noun} who loved a ${prompts.adjective} ${prompts.noun2}`
    );
  }
  return (
    <div>
      {story && (
        <div>
          <p>{story}</p>
          <button onClick={() => setStory(null)}>Reset</button>
        </div>
      )}
      {!story && (
        <form onSubmit={handleSubmission} className="Form">
          {generateInputs()}
          <button>Get Story</button>
        </form>
      )}
    </div>
  );
}

export default Form;
