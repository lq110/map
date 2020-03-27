import React, { Component, useRef, useEffect } from "react";
// 先了解一下老的语法
const Child = () => {
  // 1.创建一个ref对象
  const ref = useRef();
  useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <div>
      {/* 绑定元素 */}
      <input type="text" ref={ref} />
    </div>
  );
};
export default Child;
