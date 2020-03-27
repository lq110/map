import React, { Component } from "react";
import verify from "./verify";
import axios from "axios";
import { loginApi } from "./api/index";
export default class Login extends Component {
  constructor(props) {
    super(props);
    //关于super的隐藏的知识点
    //  如果当前组件作为子组件，并且接收了父组件传递进来的props，那么super里必须传入props
    // 否则，在constructor里是拿不到的，但是在其他的地方props是可以拿到的
    this.state = {
      userName: "",
      password: ""
    };
    console.log(this.props);
  }
  // 设置值
  setVal = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  render() {
    const { userName, password } = this.state;
    return (
      <div className="login">
        <fieldset>
          <legend>登录</legend>
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
            <label htmlFor="">
              <button type="button" onClick={this.submit}>
                登录
              </button>
              <button type="button" onClick={this.toReg}>
                去注册
              </button>
            </label>
          </form>
        </fieldset>
      </div>
    );
  }
  // 登录
  submit = () => {
    // 1.把表单里的对应的state状态值拿到
    const { userName, password } = this.state;
    //  这里的验证应该是验证不合法，当不合法的时候提示用户，并且不要提交
    if (verify({ userName, password, type: "login" })) {
      loginApi({ userName, password }).then(res => {
        if (res.status === 200) {
          alert("登录成功");
          console.log(res.data);
          return res.data;
        } else {
          alert("请求出错！");
        }
      });
    }
  };
  // 去注册
  toReg = () => {
    // 这里有可优化点
    this.props.setIsModel("register");
  };
}
