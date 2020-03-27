import React, { useState } from "react";
import { render } from "react-dom";
// 自定义hooks 规则 use开头  hooks钩子
// 自定义hooks 只共用的逻辑 数据会单独生成新的副本 不公用数据
function useNumber() {
  let [number, setnumber] = useState(0);
  setInterval(() => {
    setnumber(number + 1);
  }, 2000);
  return [number, setnumber];
}

function Parent1() {
  let [number, setnumber] = useNumber();

  return (
    <>
      <div>组件1{number}</div>
      <button onClick={() => setnumber(number + 100)}>加一百</button>
    </>
  );
}
function Parent2() {
  let [number, setnumber] = useNumber();
  return (
    <>
      <div>组件2{number}</div>
    </>
  );
}

render(
  <>
    <Parent1 />
    <Parent2 />
  </>,
  window.root
);
