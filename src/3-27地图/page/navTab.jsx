import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
// 定义tabs里面显示的信息 是个数组
const tabs = [
  { title: "疫情地图" },
  { title: "最新消息" },
  { title: "辟谣信息" },
  { title: "疫情趋势" }
];
// tab  导航标题 TabPane 里面放需要显示的内容
function NacTab() {
  return (
    <>
      <Tabs defaultActiveKey="1">
        {tabs.map((item, index) => (
          <TabPane tab={`${item.title}`} key={index}>
            {item.title}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
}

export default NacTab;
