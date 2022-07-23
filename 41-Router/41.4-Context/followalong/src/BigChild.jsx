import React from "react";
import SmallChild from "SmallChild";
import { ThemeContext } from "Context";

function BigChild() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <p>Big child</p>
      <SmallChild />
      <button onClick={toggleTheme}>change</button>
    </div>
  );
}

export default BigChild;
