// import React from "react";
import React from "./react";
import { render } from "./react-dom";
// let a = <span className="a">hello</span>; // jsx其实是对象
// console.log(a);
let tag = React.createElement("span", { className: "a" }, "hello");
// jsx 元素创建调用React.createElement 这个方法 jsx 语法糖
// {type："span",props:{className:"a"}}
// React.createElement 方法调用 是一个对象
// console.log(tag);
render(tag, window.root);
