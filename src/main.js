import  './assets/reset.css'
import  './assets/rem'

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button,Col, Row,Icon ,Field,Tab,Tabs,Swipe,CountDown,Toast,Uploader
          ,Tabbar, TabbarItem,Sidebar, SidebarItem,GoodsAction, Sku,NavBar,
          GoodsActionIcon, GoodsActionButton,SwipeItem,Grid, GridItem} from 'vant'

Vue.use(Button).use(Col).use(Row).use(Icon).use(Field).use(Tab).use(Toast)
    .use(Tabs).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(CountDown)
    .use(Tabbar).use(TabbarItem).use(Sidebar).use(SidebarItem).use(GoodsAction)
    .use(GoodsActionIcon).use(GoodsActionButton).use(Sku).use(NavBar).use(Uploader)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
