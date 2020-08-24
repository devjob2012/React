import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };

  render() {
    console.log("props----> ", this.props);

    return (
      <div className="container">
        <span className={this.getBadgeMethod()}>{this.formatCount()}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{this.props.id}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={this.props.onIncrement}
          className="btn  btn-secondary btn-sm"
        >
          Increament
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={this.props.onDelete}
          className="btn  btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.formatCount() === "ZERO" ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.counter.value;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
