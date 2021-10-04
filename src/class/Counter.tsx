import React, { Component } from 'react';

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState?.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <p>{this.props.message}</p>
        <strong>Counter = {this.state?.count}</strong>
      </div>
    );
  }
}
