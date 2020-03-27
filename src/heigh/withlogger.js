import React from "react";

export default Component => {
  return class extends React.Component {
    UNSAFE_componentWillMount() {
      this.start = Date.now();
    }
    componentDidMount() {
      console.log(Date.now() - this.start + "ms");
    }
    // 我们要把传入的组件渲染出来
    render() {
      return <Component {...this.props} />;
    }
  };
};
