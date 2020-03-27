import React, { Component } from "react";
import Tasks from "./tasks";
// 今天使用上下文对象去完成
// 组件的组合模式更容易扩展和维护还有迭代
export default class Index extends Component {
  render() {
    return (
      <div>
        {/* 输入框 */}
        {/* 正在进行的输入框 */}
        <Tasks />
      </div>
    );
  }
}
