// 这个就是一个公用的模块模板组件
import React from "react";
// 父组件通过props传递过来的数据，我们必须要显示的使用它，才能显示出来
export default props => {
  const { text, className } = props;
  console.log(props);
  return <div className={className}>{text}</div>;
};
