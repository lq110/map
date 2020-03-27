function render(content, parent) {
  if (typeof content === "string" || typeof content === "number") {
    return parent.appendChild(document.createTextNode(content));
  }
  let { type, props } = content;
  let ele = document.createElement(type);
  console.log(ele);
  // 把children 渲染到span里面
  let children = props.children;
  if (!Array.isArray(children)) {
    children = [children];
  }
  // 循环props这个对象
  for (let key in props) {
    if (key === "children") {
      console.log(props[key]);
    }
  }

  return parent.appendChild(ele);
}
export default { render };
export { render };
