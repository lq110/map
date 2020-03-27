import React, { useState, useContext, createContext } from "react";
import ReactDOM, { render } from "react-dom";
// useContext 使用上下文 多层传值
function Child() {
  // 3.通过useContext拿到上下文
  let { number, addNumber } = useContext(MyContext);
  return (
    <>
      <h2>我是Child组件</h2>
      <h3>{number}</h3>
      <button onClick={() => addNumber(number + 1)}>上下文的点击加一</button>
    </>
  );
}
// 1.创建一个上下文
let MyContext = createContext();
function APP() {
  let [number, addNumber] = useState(0);
  // 2.提供者 通过value提供给外部使用
  return (
    <MyContext.Provider value={{ number, addNumber }}>
      <Child />
    </MyContext.Provider>
  );
}
ReactDOM.render(<APP />, window.root);
