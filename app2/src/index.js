// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "./public-path"

// export async function bootstrap() {
//   console.log("[react] react app bootstraped");
// }
// // @ts-ignore
// export async function mount(props) {
//   console.log(props);
//   ReactDOM.render(
//     <App />,
//     props.container
//       ? props.container.querySelector("#root")
//       : document.getElementById("root")
//   );
// }
// // @ts-ignore
// export async function update(props) {
//   console.log("update props", props);
// }

// // @ts-ignore
// export async function unmount(props) {
//   ReactDOM.unmountComponentAtNode(
//     props.container
//       ? props.container.querySelector("#root")
//       : document.getElementById("root")
//   );
// }
// // @ts-ignore
// if (!window.POWERED_BY_QIANKUN) {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./public-path";

const root = ReactDOM.createRoot(document.getElementById("root"));
function render() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// 独立运行时，直接挂载应用
// @ts-ignore
if (!window.POWERED_BY_QIANKUN) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("[react] react app bootstraped");
}
// @ts-ignore
export async function mount(props) {
  // console.log(props);
  // ReactDOM.render(
  //   <App />,
  //   props.container
  //     ? props.container.querySelector("#root")
  //     : document.getElementById("root")
  // );
  console.log("ReactMicroApp mount", props);
  render(props);
}
// @ts-ignore
export async function update(props) {
  console.log("update props", props);
}

// @ts-ignore
export async function unmount(props) {
  // ReactDOM.unmountComponentAtNode(
  //   props.container
  //     ? props.container.querySelector("#root")
  //     : document.getElementById("root")
  // );
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.unmount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
