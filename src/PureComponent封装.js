import React, { Component } from "react";
import { render } from "react-dom";
// PureComponect 对比组件前后状态


export default class Index extends Component {
  isPureComponent = true;
  // 组件即将更新 新的属性和新的状态
  shouldComponentUpdate(nextprops, nextstate) {
    return (
      shadowEqual(this.props, nextprops) || shadowEqual(this.state, nextstate)
    );
  }

  render() {
    return <div>123</div>;
  }
}
function shadowEqual(obj1, obj2) {
  // 首先判断是不是一个对象
  if (obj1 === obj2) {
    return true;
  }
  // 判断obj1和obj2是不是对象
  if (
    !typeof obj1 === "object" &&
    obj1 != null &&
    typeof obj2 === "object" &&
    obj2 != null
  ) {
    return false;
  }
  let key1 = Object.keys(obj1); // 拿到obj1的key值
  let key2 = Object.keys(obj2); // 拿到obj1的key值
  if (key1.length !== key2.length) {
    return false;
  }
  // 如果长度一样判断每一个的值是否相等
  for (let key of key1) {
    if (obj2.hasOwnPropety(key) && obj1[key] === obj2[key]) {
      return true;
    }
  }
}
render(<Index />, window.root);
