import React from "react";

class Counter extends React.Component {
  // Constructor
  // constructor(props) {
  //   super(props);
  // }

  // Setting the state
  state = {
    count: this.props.initialNumber,
    theme: this.props.theme,
  };

  componentDidMount() {
    console.log("The comp is mounted");
  }

  componentDidUpdate() {
    console.log("The component is Updated");
  }

  componentWillUnmount() {
    console.log("component is unmounted");
  }

  // Methods
  increment2 = () => {
    this.setState({ count: this.state.count + 2 });
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  toggle = () => {
    if (this.state.theme === "dark") {
      return this.setState({ theme: "light" });
    }
    return this.setState({ theme: "dark" });
  };

  // Render method
  render() {
    console.log("Rendering Started");
    return (
      <div>
        <button onClick={this.decrement}>Sub</button>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.increment2}>2 Add</button>

        <div>
          <button onClick={this.toggle}>Toggle</button>
        </div>
      </div>
    );
  }
}

export default Counter;
