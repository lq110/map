import React, { createRef, useRef, useState } from "react";
import { render } from "react-dom";
// 验证createRef 和 useRef 是否返回一个新对象
function Parent() {
  let [number, setNumber] = useState(0);
  return (
    <>
      <Children />
      <span>{number}</span>
      <button onClick={() => setNumber(number + 1)}>点击加一</button>
    </>
  );
}
let inputref;
function Children() {
  console.log("渲染Children");
  // let myRef = createRef(); // 会创建一个新对象 false
  let myRef = useRef(); // 返回老对象 true
  // 验证createRef 和 useRef 是否返回一个新对象
  console.log("inputref===ref", inputref === myRef);
  inputref = myRef;
  return (
    <>
      <input ref={myRef} />
    </>
  );
}
render(<Parent />, window.root);
