import React, { useState, useEffect } from "react";
function useMouce() {
  let [position, setPosition] = useState({ x: 0, y: 0 });
  // 默认初识位置
  useEffect(() => {
    function updateMouse(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    // 鼠标每移动就更新鼠标的坐标
    document.addEventListener("mousemove", updateMouse);
    return () => {
      // 清除副作用
      document.removeEventListener("mousemove", updateMouse);
    };
  });
  return position;
}
function Mouse() {
  let position = useMouce();
  console.log(position);
  return (
    <div>
      <h1>
        x:{position.x} y:{position.y}
      </h1>
    </div>
  );
}
export default Mouse;
