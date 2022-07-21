import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Calculator() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathParams = location.pathname.split("/");

  const action = pathParams[1];

  const a = parseInt(pathParams[2]);
  const b = parseInt(pathParams[3]);

  React.useEffect(() => {
    if (!a || !b) navigate("/");
  }, [a, b, navigate]);

  let result;

  switch (action) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;

    default:
      break;
  }

  return (
    <div className="">
      {a && b && (
        <div>
          <h2>Calc Function: {action}</h2>
          <h2>Result: {result}</h2>
          <NavLink to="/">Go Home</NavLink>
        </div>
      )}
    </div>
  );
}

export default Calculator;
