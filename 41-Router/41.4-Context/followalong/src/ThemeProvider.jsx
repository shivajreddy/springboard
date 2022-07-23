import React from "react";
import { ThemeContext } from "Context";

const lightTheme = {
  color: "black",
  backgroundColor: "white",
};
const brownTheme = {
  color: "dimgray",
  backgroundColor: "wheat",
};
const darkTheme = {
  color: "white",
  backgroundColor: "black",
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(lightTheme);
  function toggleTheme() {
    switch (theme) {
      case lightTheme:
        setTheme(brownTheme);
        break;
      case brownTheme:
        setTheme(darkTheme);
        break;
      default:
        setTheme(lightTheme);
        break;
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
