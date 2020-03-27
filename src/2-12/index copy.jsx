import React from "react";
import "./style.css";
// props ===单词
// props在react中表示属性，简单的理解就是用来父组件传递子组件数据的一种方式

// 子组件
const Child = props => {
  // {} 在react中表示js执行环境也叫js表达式，在react标签里要使用变量或者js语句都需要放在{}表达式里才会执行，否则就成了字符串 只在标签里使用
  return <div>我是子组件：{props.name}</div>;
};

// 向外暴露的组件
export default () => {
  return (
    <div>
      我是一个自定义组件
      <Child name="李强" />
    </div>
  );
};
