import React from "react";
import Reactdom, { render } from "react-dom";
// function fn() {
//   alert("我是事件");
// }
// let tag2 = "诸葛亮";
// let tag3 = "<div>我是插入的html</div>";
// let tag = (
//   <React.Fragment>
//     {" "}
//     <span>{tag2}</span>
//     <span onClick={fn} style={{ color: "red" }}>
//       真聪明
//     </span>
//     <label htmlFor="myinput">
//       聚焦
//       <input id="myinput" />
//       <div dangerouslySetInnerHTML={{ __html: tag3 }}></div>
//     </label>
//   </React.Fragment>
// );

// {}必须有返回值 不能只写表达式
let cc = function() {
  return "我是函数";
};
let teacherSong = "woman!~";
let myel = (
  <span>
    介绍大括号的用法
    {cc()}
    {teacherSong == "woman!~"
      ? "teacherSong is woman"
      : "teacherSong isn't woman"}
  </span>
);
let myspan = <span className="c">虚拟dom</span>;
// {type:'span',props:className: {"c",children: "虚拟dom"}}
// jsx 元素 react元素 虚拟dom
// 虚拟dom是一个对象

//作业： 写一render函数 把上面的对象渲染到root上
console.log(myspan);

render(myel, window.root);

// Reactdom.render("hello world", window.root);
// render("hello world !~", window.root);
