// 纯函数 不能改变入参
function sum(a, b) {
  return a + b;
}
sum(1, 2);
// 账号 余额 count是账户  a是发的工资
function s(count, a) {
  return (count = count + a);
}
s(100, 20);
