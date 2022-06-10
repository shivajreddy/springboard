import React, { useState } from 'react';
import { useFormik } from 'formik';


const npmBear = (
  <img width={100} alt="" role="presentation" src="https://static.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png" >
  </img>
)



function SignUpForm() {

  // initial state of the form
  const INITIALSTATE = {
    formName: "",
    formEmail: ""
  };

  const formik = useFormik({
    initialValues: {
      formName: "",
      formEmail: ""
    }
  }
  );

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

        {npmBear}

        <form>

          <label htmlFor='name' > Name </label>
          <input
            id="name"
            name="formName"
            // value={formData.formName}
            value={formik.values.formName}
            onChange={handleChange}
          />

          <label htmlFor='email' > Email </label>
          <input
            id="email"
            name="formEmail"
            // value={formData.formEmail}
            value={formik.values.formEmail}
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