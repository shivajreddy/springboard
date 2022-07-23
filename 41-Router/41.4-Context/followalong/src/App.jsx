import * as React from "react";
import ThemeProvider from "ThemeProvider";
import BigChild from "BigChild";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h2>React Context hooks - App</h2>
        <BigChild />
      </div>
    </ThemeProvider>
  );
}

export default App;
