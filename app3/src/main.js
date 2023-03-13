import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./public-path";

let app;

function render(props) {
  const { container } = props;
  app = createApp(App);
  app
    .use(router)
    .mount(
      container instanceof Element ? container.querySelector("#App3") : container
    );

}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: "#App3" });
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("--bootstrap");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount() {
  console.log("--mount");
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("--unmount");
  app.unmount() 

}

createApp(App).use(store).use(router).mount("#App3");
