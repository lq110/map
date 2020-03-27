import React from "react";
import Child from "./child"; //子组件
// 引入模块化css文件
import Style from "./Index.module.css";
console.log(Style);
// 这个文件就是向外暴露的目标文件
// 在node.js模式中，会自动的找到index.js或者index.jsx文件作为目标文件
// 插槽的使用方法
export default props => {
  return (
    <div className={Style.box}>
      {/* 1.这里放置一个自定义组件 */}
      123
      <Child>
        {/* 这就是插槽的写法：就是在自定义内部插入内容 */}
        {/* 当我们向自定义组件中插入一个元素的时候，children是一个对象，如果插入多个元素就会是一个数组 */}
        <p name="paragraph">我是插槽形式的标签</p>
        <h2 name="title">标题</h2>
      </Child>
    </div>
  );
};
//  组件成对的标签写法和单标签写法有什么不同？
// <Child></Child> || <Child/>
// 区别是，成对的标签可以插入额外的内容
