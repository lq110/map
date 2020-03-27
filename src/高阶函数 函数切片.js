import React, { Component } from "react";
import { render } from "react-dom";
// // 高阶函数：函数里面返回函数 把函数作为参数 两个箭头以上的函数
// function _toString(str) {
//   return Object.prototype.toString.call(str).slice(8, -1);
// }
// function isType(type) {
//   return function(value) {
//     return type === _toString("String");
//   };
// }
// let obj = {};
// let arr = ["String", "Number", "Array", "Object"];
// arr.forEach(type => {
//   obj[`is${type}`] = isType(type);
// });
// let isString = isType("String");
// let res = isString("abc");
// // console.log(res); // true
// console.log(obj.isString("12456"));

// 吃西瓜 高阶函数
// function after(time, callback) {
//   return function() {
//     if (--time == 0) {
//       callback();
//     }
//   };
// }
// let eat = after(2, () => {
//   console.log("吃完了");
// });
// eat();
// eat();
// 发布订阅
// let obj = {
//   cbs: [], //存放on里面的回调函数
//   args: [],
//   on(cb) {
//     // 订阅
//     this.cbs.push(cb);
//   },
//   emit(arg) {
//     //发布  每次发布事件把参数存到cbs的数组里
//     this.args.push(arg);
//     this.cbs.forEach(fn => fn(this.args));
//   }
// };
// // 先吃饭 在喝水 然后去上学
// setTimeout(() => {
//   obj.emit("吃饭");
// });
// setTimeout(() => {
//   obj.emit("喝水");
// });
// obj.on(args => {
//   if (args.length === 2) {
//     console.log("上学");
//   }
//   // console.log(args);
// });

// aop 函数切片  在调用方法执行前做一些事情
let arr = [1, 2, 3, 4];
// arr.slice(0);
let slice = Array.prototype.slice;
Array.prototype.slice = function(arg) {
  console.log("方法调用前做一些事情");
  slice.apply(arg);
};
arr.slice(0);

function say() {
  console.log("1");
}
// 在函数执行一段逻辑
Function.prototype.before = function(fn) {
  console.log("函数执行之前做的事情");
  fn.call(this);
};
say.before(function() {
  console.log("我是回调");
});
// say();
export default class Index extends Component {
  render() {
    return <div>123</div>;
  }
}

render(<Index />, window.root);
