import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";
// 自定义hooks 公用的函数 use开头 自定义ajax
function useAjax(url) {
  let [data, setdata] = useState(null);
  useEffect(() => {
    let fetchData = async () => {
      let res = await axios.get(url);
      setdata(res.data);
    };
    fetchData();
  }, [url]);

  return data;
}

function App() {
  let data = useAjax("http://localhost:3000/data.json");
  console.log(data);
  return <div></div>;
}
render(<App />, window.root);
