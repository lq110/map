import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <div>
        <h2>我子组件</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    );
  }
  // 准备卸载
  componentWillUnmount() {
    console.log("子组件准备卸载了");
    // 在公司里，会有统计日志，当用户离开一个页面的时候，会偷偷的告诉服务器，这个用户离开了
    // 视频网站，它们有很多板块：二次元，鬼畜。一个用户在该板块停留的时间，看了多少视频
    // 二次元页面，我点了鬼畜，在页面卸载的生命周期里偷偷的发一个通知告诉服务器，说这个孩子离开了，一共停留多少时间
    // 下一次你再打开视频软件的时候，它会根据你上一次浏览的情况，推送你喜欢的视频
    alert("你真的要离开吗");
    // 生命周期里，两大重要的钩子函数，一个时挂在成功，一个时卸载
  }
}
