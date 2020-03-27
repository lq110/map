// props-types 验证属性
import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types"; // 第三方库
// PropTypes 类型检查  npm i prop-types

class Person extends Component {
  constructor(props) {
    super(props);
  }
  // 如果不传值给的默认值
  static defaultProps = {
    age: 25
  };
  // 类型验证
  static propTypes = {
    age: PropTypes.number.isRequired, // isRequired 表示必传
    sex: PropTypes.oneOf(["男", "女"]),
    pos: PropTypes.shape({
      //形状
      x: PropTypes.number,
      y: PropTypes.number
    }),
    // 自定义验证器  只要age小于18就报错提示
    age: function(props, propsName, componentName) {
      console.log(props[propsName]);
      if (props[propsName] < 18) {
        return new Error(
          `Invalid prop ${propsName},component ${componentName}`
        );
      }
    }
  };
  render() {
    return <div>{this.props.age}</div>;
  }
}
let personobj = {
  age: 18, //只能大于18岁 必传  数字
  sex: "男", //只能男或者女 其中一个
  hobby: ["吃饭", "睡觉"],
  pos: {
    // 具有xy属性 构成的对象
    x: 120,
    y: 400
  }
};
render(<Person {...personobj} />, window.root);
