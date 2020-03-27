import React, { Component } from "react";
// state的用法
export default class App extends Component {
  // 构造函数
  constructor(props) {
    super(props);
    // 状态的声明
    this.state = {
      conut: 0,
      isShow: false
    };
  }
  // 渲染函数
  render() {
    return (
      <div>
        <h1>{this.state.conut}</h1>
        <button onClick={this.add}>切换</button>
        {/* 控制元素 */}
        {this.state.isShow && <div style={{ color: "red" }}>你好</div>}
      </div>
    );
  }
  // 累加的方法
  add = () => {
    // 切换
    this.setState({
      isShow: !this.state.isShow
    });
  };
}
