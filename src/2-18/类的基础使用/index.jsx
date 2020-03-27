import React, { Component } from "react";
import Son from "./son"; // 子组件
// react里类不能直接用，需要继承
// class组件，在es6里对应class类名是有规范要求的，首字母必须大写
// react里自定义组件首字母也是大写
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Son name="李强" myclass="son-box" />
        我是一个class组件
      </div>
    );
  }
}
export default App;
