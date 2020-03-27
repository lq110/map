import React, { useReducer } from "react";
import ReactDOM, { render } from "react-dom";
// Reducer 状态管理器  useReducer处理复杂的逻辑 要通过dispatch去派发事件
// useReducer 有三个参数 reducer函数(操作state) intialstate 初始化数据 如果需要第三个参数会把第三个参数的返回值作为reducer的 state初始值
// 基本使用
//  intialstate 初始化的数据
let intialstate = 0;
function reducer(state = intialstate, action) {
  // 根据action的事件类型进行处理 action.type可以判断事件类型 通过事件类型的不同来对state 进行修改
  switch (action.type) {
    case "ADD":
      alert("加一");
      return { ...state, number: state.number + 1 };

    case "MINUS":
      alert("减一");
      return { ...state, number: state.number - 1 };
    default:
      break;
  }
}
function APP() {
  // reducer是一个函数 负责修改state的
  const [state, dispatch] = useReducer(reducer, intialstate, () => ({
    number: intialstate
  }));
  return (
    <>
      <span>{state.number}</span>
      {/*
     * 派发了一个ADD事件到reducer type表示事件类型/事件名  dispath里面派发的东西我们叫action动作 动作会派发到reducer payload 载荷 需要的话用payload
     * dispatch里面派发的东西我们叫做action 动作 动作会派发到reducer

      */}
      <button onClick={() => dispatch({ type: "ADD" })}>点击加一</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>点击减一</button>
    </>
  );
}
ReactDOM.render(<APP />, window.root);
