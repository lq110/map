import React, { Component, createContext, useContext } from "react";
import { render } from "react-dom";
// 函数组件使用上下文 子组件 有两种接收方式 1.Consumer 2.useContext
// 项目中不建议使用上下文
// 1.创建一个上下文对象 返回两个组件  Provider(提供者) Consumer(消费者)
let myContext = createContext();
class Page extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return (
      // 2.使用Provider定义 value值 用来传递上下文对象
      <myContext.Provider value={{ color: "red" }}>
        <Content>
          <Header />
        </Content>
        <Content>
          <Header2 />
        </Content>
      </myContext.Provider>
    );
  }
}

function Header() {
  //3. 第二种获取写法 返回一个函数 value值是函数的参数
  return (
    <myContext.Consumer>
      {value => {
        return <h1 style={{ color: value.color }}>我是头部组件</h1>;
      }}
    </myContext.Consumer>
  );
}
// 函数组件使用上下文对象 2.也可以使用hooks 钩子函数
function Header2() {
  //3. 也可以使用hooks 钩子函数
  let context = useContext(myContext);
  console.log(context);
  return <h1 style={{ color: context.color }}>我是头部组件</h1>;
}
class Content extends Component {
  render() {
    return (
      <div>
        我是容器组件
        {this.props.children}
      </div>
    );
  }
}
render(<Page />, window.root);
