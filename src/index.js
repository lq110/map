import React, { useEffect, useState } from "react";
// useEffect:数据获取、订阅、定时执行任务手动修改ReactDOM这些副作用
// 依赖项: 1.空数组，则只会执行一次
// 2.非空数组，useEffect只有数据改变才执行
// 3.不填array这个数组，useEffect每次都会执行
// rfce 自动生成函数组件默认导出快捷键
import { render } from "react-dom";
import App from "./路由基础/index";

render(<App />, window.root);
