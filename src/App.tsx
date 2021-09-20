import React from "react";

interface IState {
  counter: number;
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0,
  };
  add() {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter}
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default App;
