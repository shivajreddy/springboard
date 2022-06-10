import React, { useState } from 'react'

/* DESCRIPTION

Create a new React application, which contains the following components:

App - this component should render the BoxList component.

BoxList - Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component

Box- this component should display a div with a background color, width and height based on the props passed to it.

NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.

When each Box component is displayed, add a button with the text of of “X” next to each Box. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button should not be a separate component, it should be included in the Box component.


*/

function NewBoxForm() {

  const INITIAL_STATE = {
    "color": "",
    "width": "",
    "height": ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  function handleChange(e) {
    const { name, value } = e.target;

    // set the state
    setFormData(prevData => {
      return ({
        ...prevData,
        [name]: value
      })
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.color === "" || formData.width === "" || formData.height === "") {
      return false;
    } else {
      // Call the function to add new box component
      setFormData(INITIAL_STATE);
    }
  }

  return (
    <div>

      <form typeof='submit'>
        <label htmlFor="color">Color Name:</label>
        <input id="color"
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

        <label htmlFor="width">Width:</label>
        <input
          id="color"
          type="text"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
          id="color"
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>

      </form>

    </div>
  )
}

export default NewBoxForm

