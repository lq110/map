import React, { Component, PureComponent } from "react";
import { render } from "react-dom";
// 类组件
// 1.通过bind解决 this.add.bind(this)
// 2.解决通过箭头函数 onClick={()=>this.add()}
// 3.把方法定义到类上 add=()=>{}
// PureComponent 组件状态不变就不进行渲染
// react 里数据是向下流动的
// props是不能修改的
// props state 
export default class Index extends Component {
  constructor(props) {
    //类组件的构造函数
    super(props); // this.props = props
    // 这里初始化this.state
    this.state = {
      number: 1
    };
    //
  }
  add() {
    //this.state只能通过this.setState进行修改值
    // setState是异步的 通过队列来实现操作的
    this.setState({ number: this.state.number + 1 });
    //  0
    this.setState({ number: this.state.number + 1 });
    // number加了1
    // this.state.number =2
    // this.forceUpdate(); //强制更新
  }
  add1() {
    this.setState(
      state => {
        console.log(state.number); //1
        return { number: state.number + 1 };
      },
      () => {
        console.log(this.state.number); // 3
        // 第二个回调函数永远会返回最新的值
      }
    );

    this.setState(state => {
      // 上次setState操作完的值
      console.log(state.number); //2
      // state拿到上次加完的值
      return { number: state.number + 1 };
    });
    // number加了2
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>{this.props.name}</h1>
        <div>{this.state.number}</div>
        <Child name={this.props.name} />
        <button onClick={() => this.add1()}>修改</button>
      </>
    );
  }
}
function Child(props) {
  return <div>{props.name}</div>;
}

render(<Index name="李强" />, window.root);
