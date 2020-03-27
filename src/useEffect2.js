import React, { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
// useEffect 副作用 防止dom操作 定时器操作混乱
// 统计我点击多少次 显示到title上
// useEffect里的函数会在组件挂载完成后，或者组件更新完成进行调用
// 清理副作用 有两种办法(用一个即可) 1.返回一个清理函数 2.使用依赖项
function APP() {
  let [number, addNumber] = useState(0);
  useEffect(() => {
    document.title = `我点击了${number}次`;
  }); // 每次数据更新时
  // []依赖项没有变化 useEffect就不会重新执行
  useEffect(() => {
    let timer = setInterval(() => {
      addNumber(number => number + 1);
    }, 1000);
    // useEffect会返回一个清理函数 当组件卸载的时候进行清理
    // return () => {
    //   // clearInterval(timer);
    //   alert(123);
    // };
  }, []);
  return (
    <>
      <span>{number}</span>
      <button onClick={() => addNumber(number + 1)}>点击加一</button>
    </>
  );
}
ReactDOM.render(<APP />, window.root);
