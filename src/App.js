// 在组件中，react核心库是用来解析生成虚拟dom的，所以必须引入
import React from "react";
import Header from "./components/Head-box";
import Main from "./components/Main-box";
import Footer from "./components/Footer-box";
// 函数组件 基础的
// export default function App() {
//   return <div>你好</div>;
// }

// 基本布局

export default function App() {
  // <></> 这是一个占位的标签符，它不会生成任何标签元素
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

// 模块化开发使用 es6模块
// import是导入，被导入的组件一定要有导出
// export :ex = exit 导出
