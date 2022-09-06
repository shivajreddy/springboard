import React from "react";
import NavBarMain from "components/NavBar";
import Test from "components/Test";
import { Link } from "react-router-dom";

function AppRoutes() {
  return (
    <div>
      <NavBarMain />
      <h1>App routes</h1>
      <Test />
    </div>
  );
}

export default AppRoutes;
