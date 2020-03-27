import React, {
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import { render } from "react-dom";
// ref使用命令式操作 useImperativeHandle 可以选择性暴露给父组件一些属性

function Children(props, pref) {
  let inputref = useRef(); // 1
  let input2ref = useRef(); // 1

  useImperativeHandle(pref, () => {
    //返回的对象就是我们说的ref的current
    return {
      inputref, // 返回整个ref
      focus() {
        inputref.current.focus();
      },
      changeValue(text) {
        // 设置第二个input的值
        input2ref.current.value = text;
      }
    };
  }); // 使用命令式操作
  return (
    <>
      <input ref={inputref} />
      <input ref={input2ref} />
    </>
  );
}
let ForwardChild = forwardRef(Children); //返回的是一个包装过的组件
function Parent() {
  let pref = useRef(); //传递到Children的pref
  function SetVal() {
    // 修改第二个input的值
    // console.log(pref)
    pref.current.changeValue("我是新值");
  }
  function getFocus() {
    console.log(pref);
    pref.current.focus();
  }
  return (
    <>
      {/* pref是通过 ForwardChild传递过去 */}
      <ForwardChild ref={pref} />
      <button onClick={SetVal}>点击设置值</button>
      <button onClick={getFocus}>点击获取焦点</button>
    </>
  );
}

render(<Parent />, window.root);
