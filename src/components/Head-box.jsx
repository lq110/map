// 1.写组件的第一个步骤，引入react
import React from "react";
import "./Header-box.css";
// import 引入必须写在文件的最顶端

// 2.写函数组件 --es6箭头函数
// export default 告诉引入的组件，我这个组件里默认导出的就是这一个函数组件
export default () => {
  return (
    <header className="header-box">
      <nav>
        <ul>
          <li>首页</li>
        </ul>
      </nav>
    </header>
  );
};
