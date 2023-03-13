import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { start, registerMicroApps } from "qiankun"; //导入乾坤启用和注册

// 乾坤注册
// name 应用名称
// entry 端口号
// container 挂戟容器
// activeRule 激活的规则
// props 父子属性之间传参
registerMicroApps([
  {
    name: "App1",
    entry: "//localhost:3000",
    container: "#App1",
    activeRule: "/App1",
  },
  {
    name: "App2",
    entry: "//localhost:3001",
    container: "#App2",
    activeRule: "/App2",
  },
  {
    name: "App3",
    entry: "//localhost:8080",
    container: "#App3",
    activeRule: "/App3",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
start();
