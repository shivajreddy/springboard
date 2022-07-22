import * as React from "react";
import Counter from "Counter";

function App() {
  const [state, setState] = React.useState(true);

  return (
    <div>
      <h2>Class based components</h2>
      <button onClick={() => setState(!state)}>
        {state ? "unmount" : "mount"}
      </button>
      {state && <Counter initialNumber={10} color="red" flag={true} />}
    </div>
  );
}

export default App;
