import React, { createRef, useRef, useState, forwardRef } from "react";
import { render } from "react-dom";
// 父组件如何拿到子组件的ref
// forwardRef 转发ref
// forwardRef 包装过后组件会有2两个属性props 和ref
function Children(props, pref) {
  return (
    <>
      <input ref={pref} />
    </>
  );
}
let ForwardChild = forwardRef(Children); //返回的是一个包装过的组件
function Parent() {
  let pref = useRef(); //传递到Children的pref
  function SetVal() {
    console.log((pref.current.value = "我是ref"));
  }
  return (
    <>
      {/* pref是通过 ForwardChild传递过去 */}
      <ForwardChild ref={pref} />
      <button onClick={SetVal}>点击获取焦点</button>
    </>
  );
}

render(<Parent />, window.root);
