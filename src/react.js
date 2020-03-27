function ReactElement(type, props) {
  //{  type: "span"

  //props: { className: "a", children: "hello" }}

  return { type, props };
}

// children 可能是一个也可能是多个
function createElement(type, props, children) {
  let config = {}; // 拷贝props对象上的所有属性
  for (let key in props) {
    config[key] = props[key];
  }
  // arguments 是类数组
  // 1.类数组转数组 Array.from(es6方法)
  // 2.拓展运算符 [...arguments] (es6方法)
  // 3.[].slice.call(arguments)(es5)
  //    Array.prototype.slice.call()
  //
  // let childs = Array.from(arguments).slice(2);
  // console.log(Array.isArray([...arguments]));
  // childs 需要渲染的文本节点或者子元素
  let childs = Array.prototype.slice.call(arguments).slice(2);
  if (childs.length == 1) {
    config.children = childs[0];
  } else if (childs.length > 1) {
    config.children = childs;
  }
  return ReactElement(type, config);
}
// 导出一个方法叫做createElement 这个方法的作用是导出一个对象
export default { createElement };
