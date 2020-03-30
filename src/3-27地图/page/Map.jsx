import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
// 地图显示的json文件
import "echarts/map/js/china";
import "echarts/map/js/province/anhui";
import "echarts/map/js/province/henan";
import "echarts/map/js/province/xizang";
import "echarts/map/js/province/xinjiang";
import echars from "echarts/lib/echarts";
import renderMap from "../utils/rendermap"; // 获取option参数函数
import { getData } from "../api/getdata"; // 获取数据
import TabList from "../page/TableList";

// 处理成需要的数据
function setChinaData(list) {
  // 使用map转换需要的数据结构 provinceShortName => name confirmedCount=> value
  let mapList = list.map(item => ({
    name: item.provinceShortName,
    value: item.confirmedCount,
    ...item
  }));
  return mapList;
}

// 获取单个省/直辖市的数据
/**
 * @param {*} provincename 省的名称
 * @param {*} list  需要过滤的数据
 */
function getProvinceData(provincename, list) {
  console.log(provincename, list);
  let MapList = [];

  const provenList = list.filter(
    item => item.provinceShortName === provincename
  );
  console.log(provenList[0].cities);
  MapList = provenList[0].cities.map(item => {
    // console.log(item);
    return {
      name: `${item.cityName}市`,
      value: item.confirmedCount,
      ...item
    };
  });
  console.log(MapList);
  // [{'provinceShortName:"安徽"'}]
  return MapList;
}

// 自定义本地存储的hooks
function useLocal() {
  // 设置本地存储
  const setLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // 获取本地存储
  const getLocal = key => {
    return JSON.parse(localStorage.getItem(key));
  };
  return [setLocal, getLocal];
}

// 地图组件
function Map() {
  let [setLocal, getLocal] = useLocal();
  // mapList 需要显示的数据
  let [mapList, setMapList] = useState([]);
  // province 地图怎么显示
  let [province, setProvice] = useState("china");
  useEffect(() => {
    let fetchDate = async () => {
      // 如果本地存储有值 直接在本地存储里面取值 没有的话请求数据
      let result;
      // getLocal("virusdata");
      if (!getLocal("virusdata")) {
        result = await getData();
        // 把结果存到本地存储里面
        setLocal("virusdata", result);
      } else {
        result = getLocal("virusdata");
      }
      // 如果是省区地图时获取省区城市信息
      // 数据需要改变
      if (province !== "china") {
        console.log(province);
        let List = getProvinceData(province, result.newslist);
        setMapList(List);
      } else {
        // 中国地图
        // 转换过后的数据
        let List = setChinaData(result.newslist);
        setMapList(List);
      }
    };

    fetchDate();
  }, [province]);

  // 点击进入省或者直辖市地图
  let events = {
    // 点击获取省市名称
    click: params => {
      console.log(params);
      setProvice(params.name); // 点击进入省
    }
  };
  console.log(mapList);
  return (
    <div>
      这是地图组件
      <ReactECharts
        option={renderMap(province, mapList)}
        echars={echars}
        lazyUpdate={true} // 懒加载 做缓存
        onEvents={events}
      />
      <TabList data={mapList} />
    </div>
  );
}

export default Map;
