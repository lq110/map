// 非受控组件 ref
// ref是个字符串 通过ref直接拿到dom
// ref 是个函数
// createRef useRef
import React, { Component, createRef } from "react";
import { render } from "react-dom";
class Sum extends Component {
  getSum = () => {
    let a = this.refs.a.value;
    let b = this.refs.b.value;
    this.refs.result.value = a + b;
    console.log(this.refs.a.value);
  };

  render() {
    return (
      <div>
        <input ref="a" />
        <input ref="b" />
        <button onClick={this.getSum}>=</button>
        <input ref="result" />
      </div>
    );
  }
}
class Sum1 extends Component {
  getSum1 = () => {
    console.log(this.a.value);
    console.log(this.b.value);
    console.log(this.c.value);
  };

  render() {
    return (
      <div>
        <input ref={a => (this.a = a)} />
        <input ref={b => (this.b = b)} />
        <button onClick={this.getSum}>=</button>
        <input ref={c => (this.c = c)} />
      </div>
    );
  }
}
class Sum2 extends Component {
  constructor(props) {
    super(props);
    this.refa = createRef();
    this.refb = createRef();
    this.refc = createRef();
  }
  getSum2 = () => {
    console.log(this.refa.current.value);
  };
  render() {
    return (
      <div>
        <input ref={this.refa} />
        <input ref={this.refb} />
        <button onClick={this.getSum2}>=</button>
        <input ref={this.refc} />
      </div>
    );
  }
}
render(
  <>
    <Sum />
    <br />
    <Sum1 />
    <br />
    <Sum2 />
  </>,
  window.root
);
