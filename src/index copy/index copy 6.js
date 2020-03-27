import React, { Component } from "react";
import { render } from "react-dom";
import WidthLoger from "./withlogger";
// 高阶组件 传入一个老组件  返回一个新组件
// 高阶组件一般用来处理通用逻辑

export default class Index extends Component {
  UNSAFE_componentWillMount() {

    fetch("http://localhost:3000/data.json")
      .then(res => {
        console.log(res); // 响应的对象
        return res.json(); // 执行后返回一个promise then返回的就是json数据
      })
      .then(res => {
        console.log(res); // [{…}]
      });
    
  }
  render() {
    return <div>高阶组件</div>;
  }
}
// 高阶函数的返回值是我们要渲染的组件
let Indexloger = WidthLoger(Index);
render(<Indexloger />, window.root);
