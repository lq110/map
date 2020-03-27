import React, { Component } from "react";
import verify from "./verify";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      rePassword: ""
    };
  }
  // 设置值
  setVal = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  render() {
    const { userName, password, rePassword } = this.state;
    return (
      <div className="register">
        <fieldset>
          <legend>注册</legend>
          {/* 表单 */}
          <form>
            <label>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={this.setVal}
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.setVal}
              />
            </label>
            <label>
              <input
                type="text"
                name="rePassword"
                value={rePassword}
                onChange={this.setVal}
              />
            </label>
            <button type="button" onClick={this.submit}>
              注册
            </button>
            <button type="button" onClick={this.goLogin}>
              去登陆
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
  // 提交
  submit = () => {
    const { userName, password, rePassword } = this.state;
    if (verify({ userName, password, rePassword, type: "register" })) {
      console.log("可以进行分ajax验证");
    }
  };
  // 去登陆
  goLogin = () => {
    this.props.setIsModel(this.props.toModel);
  };
}
