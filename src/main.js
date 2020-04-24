import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import {
  Aside,
  Main,
  Message,
  Submenu,
  Header,
  Menu,
  MenuItem,
  MenuItemGroup,
  Container,
  Dialog,
  Button,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Submenu);
Vue.use(Header);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Container);
Vue.use(Dialog);
Vue.use(Button);
Vue.config.productionTip = false;
Vue.http = Vue.prototype.$http = axios;
Vue.message = Vue.prototype.$message = Message;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
