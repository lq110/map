// 防抖 点击按钮 如果在一定时间内继续点击了则不执行事件 最后一次点击执行事件 如果超过了一定时间则执行事件
// 类似于等电梯 电梯关门当做一个事件 第一个人进来了 如果两秒内没有人继续进来则电梯关门  有人继续进来则重新开始2秒计时 依次类推
function debounce(fn, wait) {
  let timeout;
  let that = this;

  return function() {
    // 如果在两秒之内点击了按钮 则清除上次定时器重新计时
    if (timeout) clearInterval(timeout);
    timeout = setTimeout(() => {
      fn.apply(that, arguments);
    }, wait);
  };
}
function fn() {
  console.log(123);
}
let btn = document.getElementById("btn");
btn.addEventListener("click", debounce(fn, 2000), false);
