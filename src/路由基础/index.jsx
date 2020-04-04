import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import Nav from "./Nav"; // 导航
// Link 导航标签
// 路由最外层的组件 BrowserRouter
//  BrowserRouter as Router 起别名
// HashRouter 用hash模式
// BrowserRouter  history模式 HashRouter hash模式
// Route 单路由标签  path
// Switch 只匹配一个
// Route 上面加exact 表示严格确切的匹配
function App(props) {
  return (
    <Router>
      <h1>app</h1>
      {/* 导航 */}
      <Nav />
      {/* 线路 */}
      <main>
        <Switch>
          <Route path="/home" exact>
            {/* 直接在路由中间写组件 */}
            <Home />
          </Route>
          <Route path="/about">
            {/* 直接在路由中间写组件 */}
            <About />
          </Route>
          <Route path="/profile">
            {/* 直接在路由中间写组件 */}
            <Profile />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
function Home(props) {
  return <h1> 这是主页</h1>;
}
function About(props) {
  return <h1> 这是关于我门</h1>;
}
function Profile(props) {
  return <h1> 个人中心</h1>;
}
export default App;
