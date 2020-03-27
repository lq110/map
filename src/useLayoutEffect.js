import React, { useState, useLayoutEffect, useEffect } from "react";
import { render } from "react-dom";
// domtree 渲染  cssstyle  =>rendentree useEffect
// 布局结束之后 useLayoutEffect 同步进行dom操作
function Parent() {
  let [color, setCorlor] = useState("red");
  useEffect(() => {
    // 页面渲染完成后
    console.log("useEffect");
    console.log(color);
    // document.getElementById("mydiv").style.background = "pink";
  });
  useLayoutEffect(() => {
    // 页面布局完成  还未渲染
    console.log("useLayoutEffect");
    alert(color);
    // document.getElementById("mydiv").style.background = "pink";
  });
  return (
    <>
      <div id="mydiv" style={{ backgroundColor: color, height: "100px" }}></div>
      <button onClick={() => setCorlor("green")}>绿</button>
      <button onClick={() => setCorlor("yellow")}>黄</button>
      <button onClick={() => setCorlor("blue")}>蓝</button>
    </>
  );
}

render(<Parent />, window.root);
