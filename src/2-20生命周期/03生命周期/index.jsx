import React from "react";
import Child from "./child";
// 自身组件的生命周期
// 什么组件才有生命周期 class

export default class App extends React.Component {
  // 1.初始化
  constructor() {
    super();
    console.log("1.组件初始化");
    this.state = {
      val: "123"
    };
  }

  // 修改
  setVal = () => {
    this.setState({
      val: "456"
    });
  };

  // 2.渲染
  render() {
    console.log("2.组件渲染");
    return (
      <div>
        <h2>{this.state.val}</h2>
        {// 模拟一个加载和销毁组件的
        this.state.val === "123" && <Child />}
        <button onClick={this.setVal}>更新val</button>
      </div>
    );
  }

  // 3.挂载成功
  componentDidMount() {
    // 当组件渲染成功后，该函数只会执行这一次
    // 当页面渲染成功后，去请求接口，所以这个函数就是用来干这个的
    console.log("3.挂载成功");
  }

  // 4.更新成功
  componentDidUpdate() {
    console.log("4.更新成功");
  }

  // 5.准备卸载
  componentWillUnmount() {
    console.log("5.准备卸载");
  }
}
