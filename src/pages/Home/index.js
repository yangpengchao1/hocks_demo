import { useState, useEffect, useRef } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { API_GET_DATA } from "../../global/constants";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  const submitState = useRef(false);

  useEffect(() => {
    // 如果不是在请求api的状态，就直接return掉，如果不这么做，那么在页面加载的时候fetchSetData方法就会被调用，就会把空的数据传入API接口中，数据就被清空了
    // 为了防止发生这样的情况，就需要在这里做处理
    if (!submitState.current) {
      return;
    }
    // 当数据传入API之后，再次将其改成false，防止数据被晴空
    fetchSetData(data).then((data) => (submitState.current = false));
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      <Edit add={setData} submitState={submitState} />
      <List listData={data} deleteData={setData} submitState={submitState} />
    </div>
  );

  //   当data发生变化时，就会执行当前的函数
  //   useEffect(() => {
  //     console.log("1");
  //   }, [data]);

  // 页面加载的时候会被执行
  //   useEffect(() => {
  //     console.log("2");
  //   }, []);

  //   当任何数据发生变化时，就会执行当前的函数
  //   useEffect(() => {
  //     console.log("3");
  //   });
};

export default Home;
