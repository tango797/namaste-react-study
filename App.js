import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.count} </h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<MyComponent />);
