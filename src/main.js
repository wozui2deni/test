// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from"axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,axios);


import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI);

import "bootstrap/dist/css/bootstrap.min.css"

// import "./lib/mui/dist/css/mui.css"
// import "./lib/mui/dist/css/icons-extra.css"

import Mui from 'vue-awesome-mui';
import 'vue-awesome-mui/mui/dist/css/mui.css'
import "vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css";
// import mui from "vue-awesome-mui/mui/js/mui.js"
// Vue.prototype.mui = mui;
Vue.use(Mui);

// import Element from "element-ui"
// import "element-ui/lib/theme-chalk/index.css"
// Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

/* eslint-disable no-new */
 new Vue({
  el: '#app',
  render:c=>c(App),
  router
})
