import * as React from "react";
import AppContext from "Context";
import BigChild from "BigChild";
import SmallChild from "SmallChild";

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

function App() {
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
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <div style={theme}>
        <h2>React Context hooks - App</h2>
        <BigChild />
      </div>
    </AppContext.Provider>
  );
}

export default App;
