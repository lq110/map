import React, { useState, memo, useMemo, useCallback } from "react";
import ReactDOM from "react-dom";
// useState
// 基本用法
function Couter1() {
  let [number, addNumber] = useState(213); // 返回一个数组 第一个表示变量 第二个表示操作变量的方法 userState()的参数表示变量的初识值

  return (
    <>
      <div>{number}</div>
      <button onClick={() => addNumber(number + 1)}>增加</button>
    </>
  );
}

// useState 函数式更新 惰性初始化的函数  只会初始化一次
function Coute2() {
  let [number, addNumber] = useState(0); // 返回一个数组 第一个表示变量 第二个表示操作变量的方法 userState()的参数表示变量的初识值

  function lazy() {
    setTimeout(() => {
      // 函数式更新  写成箭头函数 拿到当前的值来计算 防止多次混点 number混乱
      addNumber(number => number + 1);
    }, 3000);
  }

  return (
    <>
      <div>{number}</div>
      <button onClick={() => addNumber(number + 1)}>增加</button>
      <button onClick={lazy}>延迟点击</button>
    </>
  );
}

function Coute3(props) {
  // let [count, changecount] = useState(props.number);
  // 惰性初始化  useState传入一个函数 返回一个对象 函数只会执行一次
  let [count, changecount] = useState(() => {
    console.log("函数只在初始化时执行一次");
    return { number: 10, age: 0 };
  });

  return (
    <>
      {/* <div>{count}</div> */}

      {/* <button onClick={() => changecount(count + 1)}>增加</button> */}
      <div>{count.number}</div>
      <button
        onClick={() => changecount({ ...count, number: count.number + 1 })}
      >
        增加
      </button>
    </>
  );
}

function SubCount(props) {
  console.log("SubCount的渲染");
  console.log(props.N.N);
  return (
    <>
      <div>我是SubCount组件</div>
      <span>{props.N.N}</span>
      <button onClick={() => props.onClick()}></button>
    </>
  );
}

// 记事本 没有状态更新组件就不需要重新渲染
SubCount = memo(SubCount);
function Coute4(props) {
  let [name, changename] = useState("a");
  let [N, addN] = useState(55);
  const data = useMemo(() => ({ N }), [N]); // 第二个参数是个数组 表示依赖项 依赖项表示你需要改变的是什么数据 使用useMemo会记忆数据 不改变的话不会重新渲染
  let addClick = useCallback(() => {
    addN(N + 1);
  }, [N]); //它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
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
      <SubCount N={data} onClick={addClick} />
    </>
  );
}

ReactDOM.render(<Coute4 />, window.root);
// ReactDOM.render(<Coute3 number={3} />, window.root);
