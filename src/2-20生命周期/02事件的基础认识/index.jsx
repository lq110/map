// 事件的学习
// 主要讲事件的绑定，以及在class中this的问题
import React from "react";

// 无状态组件 === 函数组件
const Child = () => {
  // 在函数体中声明方法，一定要加声明关键字
  const setValue = () => {
    console.log("我开始ajax");
  };
  return (
    <div>
      <h1>函数组件绑定事件</h1>
      <button onClick={setValue}>提交</button>
    </div>
  );
};

// class组件里的事件绑定
// 在react中所有的事件，都叫【合成事件】，所以没有浏览器兼容问题
// 在react中所有的事件的绑定：onEvent onKeyup
class App extends React.Component {
  constructor() {
    super();
  }
  // 事件在class中的三种绑定方式
  // 事件声明优先使用的就是箭头函数绑定
  fnEvent = (value, Event) => {
    // console.log(this);
    // 如果绑定事件哪里没有显示的传入参数，那么函数里的第一个参数是隐式传进来的event对象
    alert(value); // 我想让这个值是我们传进来的，怎么写？
    console.log(Event);
  };

  // 渲染
  render() {
    // 在react里 { } 表达式，用来立即执行js的。
    return (
      <div>
        <button onClick={Event => this.fnEvent(123, Event)}>提交</button>
      </div>
    );
  }
}
export default App;
