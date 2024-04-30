import React, { Component } from "react";

class XClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfCount: 0,
    };
  }

  handleIncrement = () => {
    const { valueOfCount } = this.state;
    this.setState({ valueOfCount: valueOfCount + 1 });
  };

  handleDecrement = () => {
    const { valueOfCount } = this.state;
    this.setState({ valueOfCount: valueOfCount - 1 });
  };

  render() {
    const { valueOfCount } = this.state;

    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {valueOfCount}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default XClassComp;
