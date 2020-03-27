import React, { Component } from "react";
// es6里有数组的解构，[对象的解构]如下
//状态是组件自身的数据存储，它用来控制组件自己的变化
// props属性，它是父组件传过来的数据，
export default class App extends Component {
  // 初始状态
  // class类里子组件继承了父类后，在使用constructor的时候，必须调用super超级函数，来初始化一下父类构造函数，并且得到子类自己的this指针
  constructor() {
    // 这个super方法必须写在构造函数的顶端
    super();
    // state状态必须是一个对象
    this.state = {
      name: "李强",
      age: 20
    };
    // react数据是单向数据流，并且数据是单向监听，修改的时候我们要
    // react自带的setState,setState它需要传入的就是一个对象
  }
  // 渲染函数
  render() {
    return (
      <div>
        <h1>开始使用state</h1>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
