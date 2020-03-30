// 返回的option
const renderMap = (
  province = "china",
  mapList = [{ name: "安徽", value: 1000 }]
) => {
  const option = {
    tooltip: {
      // 提示框
      show: true,
      // triggerOn: "click",
      // formatter: "省份：{b} <br/> 累计确诊：{c}"  // a 系列名称 b name c value 写法一
      formatter: function(e, t, n) {
        // console.log(e);
        // console.log(e.name);
        // console.log(e.value);
        return `${province == "china" ? "省份" : "地区"}: ${
          e.name
        }<br/> 累计确诊：${e.value || 0}`;
      }
    },
    visualMap: {
      min: 0,
      max: 1000,
      left: 26,
      bottom: 40,
      showLabel: !0,
      text: ["高", "低"],
      pieces: [
        {
          gt: 1000,
          label: "> 1000 人",
          color: "#7f1100"
        },
        {
          gte: 100,
          lte: 1000,
          label: "> 100 人",
          color: "red"
        },
        {
          gte: 10,
          lte: 100,
          label: "10 - 100 人",
          color: "#ff5428"
        },
        {
          gte: 1,
          lt: 10,
          label: "1 - 9 人",
          color: "#ff8c71"
        },
        {
          gt: 0,
          lt: 1,
          label: "疑似",
          color: "#ffd768"
        },
        {
          value: 0,
          color: "#ffffff"
        }
      ],
      show: !0
    },
    geo: {
      map: province, // 图表显示的类型 显示省的时候需要用中文
      roam: !1,
      scaleLimit: {
        min: 1,
        max: 2
      },
      zoom: 1.23,
      top: 120,
      label: {
        normal: {
          show: !0,
          fontSize: "14",
          color: "rgba(0,0,0,0.7)"
        }
      },
      itemStyle: {
        normal: {
          //shadowBlur: 50,
          //shadowColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: "rgba(0, 0, 0, 0.2)"
        },
        emphasis: {
          areaColor: "#f2d5ad",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    },
    series: [
      {
        left: "center",
        name: "确诊病例",
        type: "map", // 图表类型 (地图、饼图等)
        geoIndex: 0,
        data: mapList // 我们要显示的数据  是一个数组
      }
    ]
  };

  return option;
};
export default renderMap;
