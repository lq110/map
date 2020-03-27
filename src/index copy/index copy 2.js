import React, {
  useState,
  memo,
  useMemo,
  useCallback,
  useDebugValue
} from "react";
import ReactDOM from "react-dom";

function SubCount(props) {
  console.log("SubCount的渲染");
  // console.log(props.N.N);
  return (
    <>
      <div>我是SubCount组件</div>
      <span>{props.N}</span>
      <button onClick={() => props.onClick()}></button>
    </>
  );
}

// 记事本 没有状态更新组件就不需要重新渲染
SubCount = memo(SubCount);
function Coute4(props) {
  let [name, changename] = useState("a");

  let [N, addN] = useState(55);
  // const data = useMemo(() => ({ N }), [N]); // 第二个参数是个数组 表示依赖项 依赖项表示你需要改变的是什么数据 使用useMemo会记忆数据 不改变的话不会重新渲染
  // let addClick = useCallback(() => {
  //   addN(N + 1);
  // }, [N]); //它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新

  return (
    <>
      <input
        value={name}
        onChange={e => {
          e.persist();
          changename(e.target.value);
        }}
      />
      {/* 由于传递了N 再次导致SubCount再次渲染 每一useState更新都会重新加载 */}
      <SubCount N={N} onClick={() => addN(N + 1)} />
    </>
  );
}

ReactDOM.render(<Coute4 />, window.root);
// ReactDOM.render(<Coute3 number={3} />, window.root);
