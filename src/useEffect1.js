import React, { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
// useEffect 副作用 防止dom操作 定时器操作混乱
// 统计我点击多少次 显示到title上
// useEffect里的函数会在组件挂载完成后，或者组件更新完成进行调用
function APP() {
  let [number, addNumber] = useState(0);
  useEffect(() => {
    document.title = `我点击了${number}次`;
  });
  return (
    <>
      <span>{number}</span>
      <button onClick={() => addNumber(number + 1)}>点击加一</button>
    </>
  );
}
ReactDOM.render(<APP />, window.root);
