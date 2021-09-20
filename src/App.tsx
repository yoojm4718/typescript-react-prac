import React from "react";
import { Form, Input } from "./Input";
import Number from "./Number";

interface IState {
  counter: number;
  name: string;
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };
  add = () => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };
  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };
  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default App;
