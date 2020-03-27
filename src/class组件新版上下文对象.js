import React, { Component, createContext } from "react";
import { render } from "react-dom";
// class 新版本上下文

// 1.创建一个上下文对象 返回两个组件  Provider(提供者) Consumer(消费者)
let myContext = createContext();

class Page extends Component {
  render() {
    return (
      // 2.使用Provider定义 value值 用来传递上下文对象
      <myContext.Provider value={{ color: "red" }}>
        <Content>
          <Title />
        </Content>
        <Content>
          <Header />
        </Content>
      </myContext.Provider>
    );
  }
}

class Title extends Component {
  // 3.拿到上下文对象 定义一个静态属性等于我们创建的上下文对象 就可以拿到this.context这个上下文对象了
  static contextType = myContext;
  render() {
    return (
      <>
        <h1 style={{ color: this.context.color }}>我是标题组件</h1>
      </>
    );
  }
}

class Header extends Component {
  //3. 第二种获取写法 返回一个函数 value值是函数的参数
  render() {
    return (
      <myContext.Consumer>
        {value => {
          return <h1 style={{ color: value.color }}>我是头部组件</h1>;
        }}
      </myContext.Consumer>
    );
  }
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
