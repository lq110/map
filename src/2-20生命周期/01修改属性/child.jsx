import React from "react";

// 无状态组件 === 函数组件
// 状态 === state [class组件有]
export default props => {
  // 子组件自身不可以修改props属性
  const setAddCount = function() {
    console.log("我要修改属性值");
    // 子组件修改父组件传过来的值，调用的是父组件给的方法，说白了，就是使用父组件的方法去修改
    props.addCount();
  };
  return (
    <div>
      <h1>子组件修改属性</h1>
      <p>{props.count}</p>
      <button onClick={setAddCount}>修改值</button>
    </div>
  );
};
