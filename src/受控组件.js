// 受控组件 和非受控组件 // 受react控制的组件 只能通过state来修改组件状态
import React, { Component } from "react";
import { render } from "react-dom";
export default class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 1,
      c: ""
    };
  }
  getSum = () => {
    this.setState({ c: this.state.a + this.state.b });
  };
  geta = e => {
    this.setState({ a: e.target.value - 0 });
  };
  getb = e => {
    this.setState({ b: e.target.value - 0 });
  };
  render() {
    return (
      <div>
        <input onChange={this.geta} value={this.state.a} />{" "}
        <input onChange={this.getb} value={this.state.b} />
        <button onClick={this.getSum}>=</button>
        <input defaultValue={this.state.c} />
      </div>
    );
  }
}
render(<Sum />, window.root);
