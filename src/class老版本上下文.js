import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
// class 的旧版上下文  父传子
// 组件跨层级(一级以上)传递数据
// 上下文数据定义: 如果上层组件有重复定义 以最近的上下文为准 如果上级多层组件定义了不一样的上下文 则会放在一个对象上
class Page extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  // 父组件定义
  static childContextTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func
  };
  // 返回或者说定义真正的子上下文
  getChildContext() {
    return {
      color: this.state.color,
      setColor: this.setColor
    };
  }
  setColor = newColor => {
    this.setState({ color: newColor });
  };
  render() {
    return (
      <div>
        <Content>
          <Title />
        </Content>
        <Content>
          <Header />
        </Content>
      </div>
    );
  }
}
class Title extends Component {
  // 指定我要获取哪些上下文对象
  static contextTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func
  };
  render() {
    console.log(this.context);
    // this.context 就是我们获取到的上下文对象
    return (
      <div style={{ color: this.context.color }}>
        我是标题组件
        <button onClick={() => this.context.setColor("pink")}></button>
      </div>
    );
  }
}
class Header extends Component {
  static contextTypes = {
    color: PropTypes.string
  };
  render() {
    return <div style={{ color: this.context.color }}>我是头部组件</div>;
  }
}
class Content extends Component {
  render() {
    return (
      <div>
        我是容器组件
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
render(<Page />, window.root);
