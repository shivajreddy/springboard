import React from "react";
import { AppContext, ThemeContext } from "Context";

// style={{ border: "4px solid #00774D9", margin: "1rem", widhth: "100px" }}
function SmallChild() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <p>small child</p>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
}

export default SmallChild;
