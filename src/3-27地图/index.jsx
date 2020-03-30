import React from "react";
import Map from "./page/Map"; //地图组件
import NavTab from "./page/navTab";
import "antd/dist/antd.css";
export default props => {
  return (
    <>
      {/* 标签页 */}
      <NavTab />
      {/*  */}
      {/* 地图组件 */}
      <Map />
    </>
  );
};
