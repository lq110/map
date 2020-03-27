import React from "react";
import Common from "./common";
import "./style.scss";
// 这种模式--复用模式，一个模子组件被多次的复用
// 插槽模式
export default () => {
  return (
    <div className="app-box">
      {/* 第一个模子组件，我是头部 */}
      <Common text="我是头部" className="header" />
      {/* 第一个模子组件，我是中间 */}
      <Common text="我是中间" className="main" />
      {/* 第一个模子组件，我是底部 */}
      <Common text="我是底部" className="footer" />
    </div>
  );
};
