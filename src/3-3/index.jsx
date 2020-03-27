import React, { Component } from "react";
let obj = {
  data: {},
  Provider: props => {
    if (props.value === undefined) {
      throw new Error('"value" is define proto name');
    }
    obj.data = props.value;

    return <>{props.children} </>;
  },
  Consumer: props => {
    console.log(props);
    return props.children(obj.data);
  }
};
export default class App extends Component {
  render() {
    return (
      <obj.Provider value={123}>
        <div>123</div>
        <Child />
      </obj.Provider>
    );
  }
}

function Child() {
  return (
    <>
      <h1>我是子组件</h1>
      <Son />
    </>
  );
}

function Son() {
  return (
    <obj.Consumer>
      {function(data) {
        console.log(data);
        return <div>我是孙子组件</div>;
      }}
    </obj.Consumer>
  );
}
