import React from "react";
import Reactdom, { render } from "react-dom";
function fn() {
  alert(123);
}
console.log(
  <div
    className="name"
    onClick={fn}
    dangerouslySetInnerHTML={{ __html: "456" }}
  ></div>
);
// you can own ！~
// 封装myRender 方法
function myRender(content, target) {
  if (typeof content === "string" || typeof content === "number") {
    // 如果是字符串 创建文本节点
    let textNode = document.createTextNode(content);
    target.appendChild(textNode);
  } else if (typeof content === "object") {
    // 如果是对象 那么就创建标签
    let ele = document.createElement(content.type);
    if (content.props) {
      let props = content.props;
      for (let key in props) {
        // console.log(key);
        //虚拟dom上的属性赋值给对象
        if (key === "className") {
          ele.setAttribute("class", props[key]);
        } else if (key === "htmlFor") {
          ele.setAttribute("for", props[key]);
        } else if (key === "dangerouslySetInnerHTML") {
          // 使用innerHTML将内容进行插入
          // 如果元素为空则进行插入
          // console.log(content.props.children);
          // 如果元素内容内部已有内容则抛出错误 为防止攻击xss
          if (content.props.children) {
            throw new Error(
              "Error: Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          } else {
            ele.innerHTML = props[key].__html;
          }
        } else if (key === "style") {
          // 行间样式
          let str = JSON.stringify(props[key]).replace(/[,|{|}]/g, ";");
          str = str.slice(1, str.length).replace(/"/g, "");
          // console.log(str);
          ele.style.cssText = str;
        } else if (key === "children") {
          // children
          // 如果是数组说明内部有嵌套的虚拟dom元素
          // 如果不是数组就直接将内容插入到元素中
          if (Array.isArray(props[key])) {
            // 防止是类数组 将类数组转数组
            // 将数组第一项文本插入到元素中
            let arr = Array.from(props[key]);
            ele.innerText = arr[0];
            // 将数组内的虚拟dom对象进行递归 插入到其父级元素
            let newArray = props[key].slice(1);
            // console.log(newArray);
            newArray.forEach(item => {
              // console.log(item);
              myRender(item, ele);
            });
          } else {
            ele.innerText = props[key];
          }
        } else if (key.match(/on[A-Z]/)) {
          // 当匹配成功即为事件时 为元素绑定事件
          let EventName = key.toLocaleLowerCase().slice(2);
          // console.log(EventName);
          ele.addEventListener(EventName, props[key], false);
        } else {
          // 元素上其他自定义属性
          ele.setAttribute(key, props[key]);
        }
      }
    }
    //将创建的元素插入目标元素
    target.appendChild(ele);
  }
}
// myRender("文本", window.root);
myRender(
  {
    type: "p",
    props: {
      className: "big",
      data: "value",
      onClick: fn,
      children: [
        "我是内容",
        {
          type: "span",
          props: {
            style: { color: "blue" },
            className: "span1",
            children: [
              "我是内部span",
              { type: "input", props: { type: "color" } }
            ]
          }
        }
      ],
      style: { color: "red", background: "green" }
      // dangerouslySetInnerHTML: { __html: "<div>123</div>" }
    }
  },
  window.root
);
