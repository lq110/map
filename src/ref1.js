import React, { createRef, useRef } from "react";
import { render } from "react-dom";
// ref reference 引用 拿组件/原生dom
// createRef 每次返回的是新对象(每次ref都会更新) useRef返回的是老对象
function Children() {
  let myRef = createRef(); // 会创建一个对象{current：{}}
  // 我们需要的属性都会挂载ref的current属性上面
  // 获取焦点的函数
  function getFocus() {
    console.log(myRef);
    // 获取input焦点
    myRef.current.focus();
  }
  return (
    <>
      <input ref={myRef} />
      <button onClick={getFocus}>点击获取焦点</button>
    </>
  );
}
render(<Children />, window.root);
