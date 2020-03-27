import React, { Component } from "react";
// event.target点击触发的元素
// event.current获取事件绑定的元素
// event.preventDefault 禁止默认事件 react中要直接调用才可以阻止掉默认的行为
// event.stopPropagation 阻止冒泡
// event.persist 强制保留属性值
function father(e) {
  // 利用冒泡事件传递做事件委托，获取我要的触发的元素及事件绑定
  // event.target点击触发的元素
  console.log(e.target);
  // event.current获取事件绑定的元素
  console.log(e.currentTarget);
}
function submit(e) {
  e.preventDefault();
}
export default props => {
  return (
    <>
      {/* 冒泡事件传递可以用来做事件委托 */}
      <ul onClick={father}>
        <li>11</li>
        <li>22</li>
        <li>33</li>
        <li>44</li>
      </ul>
      <mark>阻止默认事件</mark>
      <form onSubmit={submit}>
        <input type="text" name="username" />
        <button>提交</button>
      </form>
    </>
  );
};
