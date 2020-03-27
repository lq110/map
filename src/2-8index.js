// 直接写一个英文名字，没有加相对路径或绝对路径，n那么程序从项目的node_modules
import React from "react";
import ReactDOM, { render } from "react-dom";
/*
import 是啥？
它是es6模块语法的【导出模块】
import【关键词】模块名称 from 【引入】 【'路径'】
*/
// 最简单的function组件
function App() {
  return <div>你好 </div>;
}
ReactDOM.render(<App />, window.root);
// render[渲染]
// render(自定义组件，要插入的dom容器)
