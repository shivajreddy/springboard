import React from "react";
import LabelInput from "LabelInput";
import "Form.css";
import Prompt from "Prompt";

// Promps object
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

    // return if any of the field is empty
    // 5th element in the HTML collection is the buttton
    for (let idx = 0; idx < 4; idx++) {
      const input = event.target.elements[idx];
      if (!input.value) return;
    }

    const noun = event.target.elements.noun.value;
    const noun2 = event.target.elements.noun2.value;
    const adjective = event.target.elements.adjective.value;
    const color = event.target.elements.color.value;

    setStory(`There was a ${color} ${noun} who loved a ${adjective} ${noun2}`);
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
