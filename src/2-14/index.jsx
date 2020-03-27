import React from "react";
export default props => {
  //  定义一个数组的内容
  const listDom = ["小李", "小张", "小强"];
  return (
    <div>
      props扩展
      {/* 插槽的时候 props.children ,当接收的是多个元素的时候，children是个数组 */}
      {/* 在react里，可以直接被渲染出来的内容，必须都是一个可读的值 */}
      {/* key：在react里，经常用在循环里，经常用在diff算法中 */}
      {/* diff算法：将旧的虚拟dom数存储，当有新的内容更新的时候生成新的dom树，然后同层的比对  如果发现有一层里的数据不相等，则用新的内容完全整个的替换掉就*/}
      {/* key在一个集合元素中，表示的是一个当前项的id */}
      {/* key 就是为了优化diff算法在性能上节约 */}
      {/* key:需要注意的是，保证每一个兄弟的key */}
      
      {[<p key="1"> 1</p>, <p key="2"> 2</p>, <p key="3">3</p>]}

      <mark>分割线</mark>
      <hr />
      {/* key的使用场景 */}
      {/* react里经常会用的遍历：数组.map() */}
      {// 重要的一点：使用map遍历列表，需要返回值
      //  在使用循环的数组上下文里，所有的平级的元素上加key
      listDom.map((item, index, arr) => {
        // 需求：如何给我们的内容前面加上一个序号呢
        return <p key={index}>{index + 1 + item}</p>;
      })}
    </div>
  );
};
