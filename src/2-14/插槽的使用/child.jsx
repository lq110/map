// 自定义组件 === 非原生标签类型的，我们自己定义的标签，叫自定义组件
import React from "react";
export default props => {
  console.log(props);
  //  插槽中如果是两个
  // props.children 这个东西存放的就是插槽写法的虚拟dom结构
  // 具名插槽：就是根据传过来的一组内容，通过标记进行分类
  let Title = "";
  let Paragraph = "";
  props.children.forEach(item => {
    if (item.props.name == "title") {
      console.log(item);
      Title = item;
    } else if (item.props.name == "paragraph") {
      console.log(item);
      Paragraph = item;
    }
  });

  return (
    <div className="child">
      我是子组件
      {/*使用插槽*/}
      {props.children[0]}
    </div>
  );
};
