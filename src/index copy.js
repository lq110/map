import React, { Component, PureComponent, createRef } from "react";
import { render } from "react-dom";
// PureComponent 对比组件前后状态 进行的是浅比较 只比较对象的第一层 this.state:number:{}层级一深就无法比较

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.myref = createRef();
    this.state = {
      number: 0
    };
  }
  add = () => {
    let value = parseFloat(this.myref.current.value);
    this.setState({
      number: this.state.number + value
    });
  };
  render() {
    console.log("render");
    return (
      <>
        {this.state.number}
        <input ref={this.myref} />
        <div onClick={this.add}>加一</div>
        <Title1 />
      </>
    );
  }
}
function Title() {
  console.log("title render");
  return <h1>我是title组件</h1>;
}
const Title1 = memo1(Title);
// 一个函数 把组件作为参数返回一个组件 叫做高阶组件 模拟memo
function memo1(FunComponent) {
  return class extends PureComponent {
    render() {
      return <FunComponent {...this.props} />;
    }
  };
}
// 模拟memo 写法二
function memo2(FunComponent) {
  return class extends PureComponent {
    render() {
      return FunComponent(this.props);
    }
  };
}
render(<Index />, window.root);
