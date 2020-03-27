import React, { useState, memo, useMemo, useCallback } from "react";
import ReactDOM from "react-dom";
// 子组件
function SubCount(props) {
  console.log("我是SubCount 触发了我");
  console.log(props);
  return (
    <>
      <div>我是SubCount组件</div>
      <h1>{props.data.number}</h1>
      <button onClick={() => props.onclick()}>加一</button>
    </>
  );
}

// 记事本 没有状态更新组件就不需要重新渲染
SubCount = memo(SubCount);
// 如果不用memo 每次点击按钮都会重新加载SubCount组件
function Counte() {
  let [name, changeobj] = useState("lq");
  let [number, changenumber] = useState(123);
  const data = useMemo(() => ({ number }), [number]); // 第二个参数是个数组 表示依赖项 依赖项表示你需要改变的是什么数据 使用useMemo会记忆数据 不改变的话不会重新渲染
  // console.log(data);
  let changeNum = useCallback(() => changenumber(number + 1), [number]); ////它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={e => changeobj(e.target.value)}
      />
      <SubCount data={data} onclick={changeNum} />
    </>
  );
}
ReactDOM.render(<Counte />, window.root);
