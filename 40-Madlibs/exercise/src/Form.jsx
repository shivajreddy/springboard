import React from "react";
import LabelInput from "./LabelInput";
import "./Form.css";

function Form() {
  const [story, setStory] = React.useState();
  function handleSubmission(event) {
    event.preventDefault();
    const submissions = [];
    const noun = event.target.elements.noun.value;
    const noun2 = event.target.elements.noun2.value;
    const adjective = event.target.elements.adjective.value;
    const color = event.target.elements.color.value;
    console.log([noun.value, noun2.value, adjective.value, color.value]);
    if (!noun || !noun2 || !adjective || !color) return;

    submissions.push(noun);
    submissions.push(noun2);
    submissions.push(adjective);
    submissions.push(color);
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
          <LabelInput id="noun" type="Text" labelText="Noun" />
          <LabelInput id="noun2" type="Text" labelText="Noun2" />
          <LabelInput id="adjective" type="Text" labelText="Adjective" />
          <LabelInput id="color" type="Text" labelText="color" />
          <button>Get Story</button>
        </form>
      )}
    </div>
  );
}

export default Form;
