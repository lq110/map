import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
// 地图显示的json文件
import "echarts/map/js/china";
import "echarts/map/js/province/anhui";
import echars from "echarts/lib/echarts";
import renderMap from "../utils/rendermap"; // 获取option参数函数
import { getData } from "../api/getdata"; // 获取数据
// 处理成需要的数据
function setChinaData(list) {
  // 使用map转换需要的数据结构 provinceShortName => name confirmedCount=> value
  let mapList = list.map(item => ({
    name: item.provinceShortName,
    value: item.confirmedCount
  }));
  return mapList;
}

// 地图组件

function Map() {
  // mapList 需要显示的数据
  let [mapList, setMapList] = useState([]);
  // province 地图怎么显示
  let [province, setProvice] = useState("china");
  useEffect(() => {
    let fetchDate = async () => {
      let result = await getData();
      // console.log(result.newslist);
      // 转换过后的数据
      let List = setChinaData(result.newslist);
      setMapList(List);
    };
    fetchDate();
  }, []);

  // 点击进入省或者直辖市地图
  let events = {
    // 点击获取省市名称
    click: params => {
      console.log(params);
      setProvice(params.name); // 点击进入省
    }
  };
  return (
    <div>
      这是地图组件
      <ReactECharts
        option={renderMap(province, mapList)}
        echars={echars}
        lazyUpdate={true} // 懒加载 做缓存
        onEvents={events}
      />
    </div>
  );
}

export default Map;
