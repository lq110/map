import axios from "axios";

export const loginApi = data => {
  return axios.get("/data.json", { params: data })
};

export const commonApi = data => {
  return axios.get(data.url, { params: data.object }).then(res => {
    if (res.status === 200) {
      if (res.status === 200) {
        return res.data;
      } else {
        alert("请求出错！");
      }
    }
  });
};
