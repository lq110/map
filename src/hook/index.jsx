import React, { useEffect, useState } from "react";
// useEffect:数据获取、订阅、定时执行任务手动修改ReactDOM这些副作用
// 依赖项: 1.空数组，则只会执行一次
// 2.非空数组，useEffect只有数据改变才执行
// 3.不填array这个数组，useEffect每次都会执行
// rfce 自动生成函数组件默认导出快捷键
function App() {
  let [Count, setCount] = useState("0");
  useEffect(() => {
    document.title = `你点击了${Count}次`;
  });
  return (
    <>
      <h1>{Count}</h1>
      <button onClick={() => setCount(Number(Count) + 1)}>点击加一</button>
    </>
  );
}
export default App;
