// 节流 窗口 滚动等频繁触发的事件：点击的时候事件每隔1秒只能触发一次
let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", throttle(fn, 1000), false);
function fn() {
  console.log(123);
  console.log(this);
}
// 节流函数
let timer;
function throttle(fn, wait) {
  //  定义开始时间
  let previous = 0;
  let that = this; //因为this指针会改变，所以需要存this this是谁 只和执行有关 和定义无关
  return function() {
    // 定义现在的时间
    let now = Date.now();
    // 现在的时间减去开始的时间， 大于wait 就让fn执行
    if (now - previous > wait) {
      fn.apply(that, arguments);
      // 第二次点击时开始时间变成now
      previous = now;
    }
  };
}
