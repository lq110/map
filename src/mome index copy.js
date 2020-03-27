import React, { useState, memo } from "react";
import ReactDOM from "react-dom";
function SubCount(props) {
  console.log("我是SubCount");
  return (
    <>
      <div>我是SubCount组件</div>
    </>
  );
}

// 记事本 没有状态更新组件就不需要重新渲染
SubCount = memo(SubCount);
// 如果不用memo 每次点击按钮都会重新加载SubCount组件
function Counte() {
  let [conut, changecount] = useState(0);
  return (
    <>
      <h1>{conut}</h1>
      <button onClick={() => changecount(conut + 1)}>加一</button>
      <SubCount />
    </>
  );
}
ReactDOM.render(<Counte />, window.root);
// ReactDOM.render(<Coute3 number={3} />, window.root);
