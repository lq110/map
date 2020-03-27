import React, { Component } from "react";
// 父组件class组件，把自己的state传递给子组件，子组件它不能直接修改父组件传递过来的值
// 要想修改，就是调用父组件的方法，通知父组件去修改
// class组件里的事件绑定
// react中所有的事件，都叫【合成事件】
export default class Child extends Component {
  // class组件最大的特点就是有自己的状态
  // class类被实例化时，第一个被调用的函数
  constructor() {
    // 实例化父类，并且得到自己的this指针
    super();
    this.state = {
      count: 0
    };
  }
  // 修改状态值
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  // 渲染dom的函数
  render() {
    return (
      <div>
        <h1>我是父组件-class</h1>
        <p>{this.props.count}</p>
        <button>修改值</button>
      </div>
    );
  }
}
