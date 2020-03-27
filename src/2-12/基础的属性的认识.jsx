import React from "react";
// 属性 :写在标签上的键值对
export default props => {
  // 在react中，你写的div p看上去好像是原生的标签，其实，实际意义上并不是
  // 它只是看上去和原生的标签一样，但它叫jsx。也就是虚拟dom,虚拟dom==js对象
  return <div id="box">我是一个组件2-12</div>;
};
/***
 *<div></div> //这个看上去和原生标签一样的div,实际上是下面这个东西，所以，在属性中class它是es6里的类关键词，所以不能直接用，用className替代
 *在react中无论是自定义组件还是原始的jsx组件，它都有属性这个对象
 *
 *
 */
