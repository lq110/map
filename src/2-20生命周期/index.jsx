import React, { Component } from "react";
import Child from "./child"; //子组件
// 无状态组件 === 函数组件
// 状态 === state[class组件有]

export default props => {
  // 子组件自身不可以修改props
  return (
    <div>
      <h1>修改属性</h1>
      <Child />
      <button>修改值</button>
    </div>
  );
};
