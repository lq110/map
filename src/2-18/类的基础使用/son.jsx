import React from "react";
// 类组件里的props属性和函数组件里的props属性一模一样，就是在调用的时候class里props需要class里面所有的属性和方法都要用this.出来
export default class Son extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <h2>我是子组件{this.props.myclass}</h2>
      </div>
    );
  }
}

// class组件里包含了所有的react特性：函数组件中只有一个props属性
// class 组件里 生命周期，捕获异常，容错边界，优化渲染
