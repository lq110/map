import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
// 虚拟dom好处只会更新改变的地方
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: new Date().toLocaleTimeString() };
  }
  // component 组件 Did 已完成 Mount 挂载 组件挂载完成
  componentDidMount() {
    // 只会执行一次
    // ajax请求 异步处理
    this.time = setInterval(() => {
      this.setState({ timer: new Date().toLocaleTimeString() });
    }, 1000);
  }
  // 卸载
  componentWillUnmount() {
    clearInterval(this.time);
  }
  render() {
    return <div>{this.state.timer}</div>;
  }
}
function Index2() {
  let [dateTime, setTime] = useState(new Date().toLocaleTimeString());
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h1>{dateTime}</h1>
    </>
  );
}
render(
  <>
    <Index /> <Index2 />
  </>,
  window.root
);
