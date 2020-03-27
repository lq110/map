import React, { useState, useEffect } from "react";
import { render } from "react-dom";
// 自定义hooks use 开头的函数 封装公用逻辑 每次hooks调用会产生一个副本(公用逻辑，但是不共用数据)
function useNumber() {
  let [num, setNum] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNum(num => num + 1);
    }, 2000);
  }, []);
  return [num, setNum];
}
function App1() {
  let [num, setNum] = useNumber();
  return (
    <>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>加一</button>
    </>
  );
}
function App2() {
  let [num, setNum] = useNumber();
  return (
    <>
      {" "}
      <div>{num}</div>
      <button onClick={() => setNum(num + 2)}>加2</button>
    </>
  );
}

render(
  <>
    <App1 />
    <App2 />
  </>,
  window.root
);
