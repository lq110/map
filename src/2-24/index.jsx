// vscode 插件：react代码片段  Reactjs code snippets
// 在工作当中，开发时，谁越快效率高
// rcc【生成一类组件】 rsc【生成一个无状态组件】
// vscode插件：自动格式代码 Prettier formatter 配置
import React, { Component } from "react";
import "./style.scss";
export default class Index extends Component {
  //  生命周期的初识函数
  constructor() {
    super();
    // 这里定义的就是用来控制表单的状态
    this.state = {
      username: "",
      password: "",
      selected: "",
      radioed: "",
      checked: ""
    };
  }
  // 设置用名
  setUserName = e => {
    e.persist();
    if (e.target.value.length >= 6) return alert("最多只能是6位");
    this.setState({
      username: e.target.value
    });
  };
  // 设置密码
  setPassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  // 设置下拉列表
  setSelect = e => {
    this.setState({
      password: e.target.value
    });
  };
  //  渲染函数--生命周期里出现两次
  render() {
    // 前端里写表单，应该遵循一个规则，就是表单里尽量使用表单元素
    // 表单里尽量使用表单元素：label input select
    return (
      <fieldset>
        <legend>我的表单</legend>
        <form>
          <label>
            姓名：{" "}
            <input
              type="text"
              value={this.state.username}
              onChange={this.setUserName}
            />
          </label>
          <label>
            密码：
            <input type="password" />
          </label>
          <label>
            保存天数：
            <select value={this.state.selected} onChange={this.setSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <label>
            男：
            <input type="radio" name="sex" />
          </label>
          <label>
            男：
            <input type="radio" name="sex" />
          </label>
          <label>
            同意{" "}
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.setChecked}
            />
          </label>
          <label>
            <button type="button" onClick={this.getForm}>
              获取值
            </button>
          </label>
        </form>
      </fieldset>
    );
  }
  // 打印出表单里所有的值
  getForm = () => {
    const { username, password, selected, radioed, checked } = this.state;
    console.log(this.state);
  };
  // 控制多选框
  setChecked = e => {
    console.log(e.target.checked);
    this.setState({
      checked: e.target.checked
    });
  };
  //控制单选框
  setRadioed = event => {
    console.log(event.target.value);
  };
}
