import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    Counter: [
      { id: 1, value: 3 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 3 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.Counter.map((val) => (
          <Counter
            key={val.id}
            counter={val}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
  handleIncrement = () => {
    console.log("Called Increment", this.props);
    this.setState({ value: this.state.Counter.value + 1 });
    //this.state.Counter.value++;
  };

  handleDelete = () => {
    console.log("Called Delete ", this.props);
    //this.setState({ count: this.props.value + 1 });
  };
}

export default Counters;
