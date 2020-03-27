import React, { useReducer, useState, useEffect } from "react";
import { render } from "react-dom";
let initialState = {
  number: 1
};
// 虚拟dom好处只会更新改变的地方
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };
  }
}
// 日志中间件
function useLogger(reducer, initialState) {
  let [state, dispath] = useReducer(reducer, initialState); // 这个dispatch 是我们真正要派发的dispatch
  function logdispatch(action) {
    console.log(state, "老状态");
    // 可做中间操作
    dispath(action);
  }
  useEffect(() => {
    console.log(state, "新状态");
    // 可进行回调
  }, [state]);
  return [state, logdispatch];
}
function Index() {
  let [state, logdispatch] = useLogger(reducer, initialState);
  return (
    <div>
      <h1>{state.number}</h1>
      <button onClick={() => logdispatch({ type: "ADD" })}>修改状态</button>
    </div>
  );
}
render(<Index />, window.root);
