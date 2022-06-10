import React, { useState } from 'react'

function SignUpForm() {

  // initial state of the form
  const INITIALSTATE = {
    formName: "",
    formEmail: ""
  };

  const [formData, setFormData] = useState(INITIALSTATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })

  }

  // Handle submisstion
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(INITIALSTATE);
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>

      <div>

        <form>

          <label htmlFor='name' > Name </label>
          <input
            id="name"
            name="formName"
            value={formData.formName}
            onChange={handleChange}
          />

          <label htmlFor='email' > Email </label>
          <input
            id="email"
            name="formEmail"
            value={formData.formEmail}
            onChange={handleChange}
          />

          <button
            id='btn'
            onClick={handleSubmit}
          >
            Sign up
          </button>

        </form>


      </div>

    </div>
  )
}

export default SignUpForm