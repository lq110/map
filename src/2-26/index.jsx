import React, { Component } from "react";
import Login from "./login";
import Register from './register'
import "./style.scss";
export default class index extends Component {
  constructor(){
    super()
    this.dict = {
      defaultModel:'login',
      register:'register'
    }
    this.state={
      isModel:this.dict.defaultModel
    }
  }
  // 给子组件用的函数
  setIsModel =(val)=>{
    this.setState({
      isModel:val
    })
  }
  render() {
    // && 【必须前后的值必须是true才返回true】
    // ||【只要有一个是true就返回true】
    // ！【取反，如果是true那么得到一个false】
    // 三目运算符
    // 切记一点，在react中的条件渲染不能写
    // js中表示false的有 ''、null、undefined、NaN
    const{isModel} = this.state
    return (
      <div>
        <h1>欢迎来到聊天室</h1>
        {/* 登录 */}
        {
        isModel ===this.dict.defaultModel?<Login setIsModel={this.setIsModel} toModel={this.dict.register}/>:<Register setIsModel={this.setIsModel} toModel={this.dict.defaultModel}/>
      }
      </div>
    );
  }
}
