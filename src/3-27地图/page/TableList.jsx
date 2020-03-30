import React from "react";
import { Table } from "antd";
// pagination是否显示分页按钮 dataSource 数据源  rowKey 数据怎么来显示  expandedRowRender 表格展开显示 是一个函数 能拿到数据的每一项
// 表格展开显示的数据
function expandedRowRender(item) {
  // console.log(item.cities); // 展开的数据
  // 如果没有数据就结束
  if (!item.cities) return;
  let data = item.cities.map(item => {
    // console.log(item);

    return {
      name: `${item.cityName}市`,
      value: item.confirmedCount,
      ...item
    };
  });
  // console.log(data);
  // columns

  let newArr = JSON.parse(JSON.stringify(columns));
  let smallClolumns = newArr.map(item => {
    delete item.title;
    return item;
  });
  console.log(smallClolumns);
  return (
    <Table
      columns={smallClolumns}
      pagination={false} // 是否分页
      dataSource={data} // 数据
      rowKey={record => {
        //指定key
        // console.log(record.name);
        return record.name;
      }}
    ></Table>
  );
}
//表头数据
const columns = [
  { title: "地区", dataIndex: "name", key: "name" },
  { title: "确诊", dataIndex: "confirmedCount", key: "confirmedCount" },
  { title: "死亡", dataIndex: "deadCount", key: "deadCount" },
  { title: "治愈", dataIndex: "curedCount", key: "curedCount" }
];
function TableList(props) {
  return (
    <Table
      columns={columns}
      pagination={false} // 是否分页
      dataSource={props.data} // 数据
      rowKey={record => {
        //指定key
        // console.log(record.name);
        return record.name;
      }}
      expandable={{
        expandedRowRender: item => expandedRowRender(item) // 展开的数据
      }}
    ></Table>
  );
}

export default TableList;
