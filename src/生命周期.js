import React, { Component, createRef } from "react";
import { render } from "react-dom";
// 只有类组件有生命周期
// 首次挂载的声明周期 constructor、render、componentDidMount
class Lifecycle extends Component {

  constructor() {
    super();
    this.state = {
      number: 1
    };
    console.log("0 constructor");
  }

  // 根据新的属性和老的状态派发新的状态(state)  参数是新的属性对象和旧的状态对象
  // static getDerivedStateFromProps(nextprops, nextstate) {
  //   console.log(nextprops);
  //   console.log(nextstate);
  //   return {};
  // }
  componentDidMount() {
    console.log("挂载完成");
  }

  add = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  // 获取更新前的快照  参数是老的属性和老的状态 会有一个返回值 这个返回值 会作为componentDidUpdate的第三个参数
  getSnapshotBeforeUpdate(prevProps, prevstate) {
    // 新版可以让dom更新前暂停
    return 300;
  }

  componentDidUpdate(prevProps, prevstate, snapshot) {
    // 组件更新完成
    console.log("componentDidUpdate");
    console.log("componentDidUpdate的参数:", snapshot); // 打印出 300
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return true; // 更新  false为阻止更新  可用于优化
  }

  componentWillUnmount() {
    //组件即将卸载
    console.log("componentWillUnmount");
  }
  render() {
    console.log("1 render");
    return (
      <>
        <div>生命周期</div>
        <h1>{this.state.number}</h1>
        <button onClick={this.add}>点击加一</button>
        {this.state.number % 2 == 1 && <Child number={this.state.number} />}
      </>
    );
  }
}
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 3
    };
  }

  componentDidMount() {
    console.log("child componentDidMount生命周期");
  }


  // 根据新的属性(props)和老的状态(state)派发出一个新的状态(state)  参数是新的属性对象和旧的状态对象
  static getDerivedStateFromProps(nextprops, privstate) {
    console.log(nextprops);
    console.log(privstate);
    return { N: nextprops.number + privstate.number };
    // 生成 this.state.N
  }

  UNSAFE_componentWillUnmount() {
    //组件将卸载  17.x之后componentWillUnmount将会被废弃
    //组件即将卸载
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>
          子组件Child
          {this.props.number}
        </h1>
        {/* 派发出来的新的状态 */}
        <h1>{this.state.N}</h1>
      </div>
    );
  }
}
render(<Lifecycle />, window.root);
