import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import CSSDemo from "./demo/css/index";
import UseStateDemo1 from "./demo/useStateDemo/UseStateDemo1";
import UseStateDemo2 from "./demo/useStateDemo/UseStateDemo2";
import UseEffectDemo1 from "./demo/useEffectDemo/UseEffectDemo1";
import UseContextDemo1 from "./demo/useContextDemo/UseContextDemo1";
import ReducerDemo1 from "./demo/reducerDemo/ReducerDemo1";
import RefDemo1 from "./demo/refDemo/RefDemo1";
import RefDemo2 from "./demo/refDemo/RefDemo2";
import UseMemoExample from "./demo/memoDemo/MemoDemo1";
import Demo1 from "./demo/tips/Demo1";
import App from "./demo/projectDemo/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <CSSDemo /> */}
    {/* <UseStateDemo1 /> */}
    {/* <UseStateDemo2 /> */}
    {/* <UseEffectDemo1 /> */}
    {/* <UseContextDemo1 /> */}
    {/* <ReducerDemo1 /> */}
    {/* <RefDemo1 /> */}
    {/* <RefDemo2 /> */}
    {/* <UseMemoExample /> */}
    {/* <Demo1 /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
