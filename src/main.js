/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-09-09 09:40:32
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-02-29 20:12:04
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import $ from 'jquery';

// 右键菜单
// mount with global
import VueContextMenu from 'vue-contextmenu'
Vue.use(VueContextMenu);

// 导入阿里图标
import './assets/iconfont/iconfont.css';

// import css
import 'vue-easytable/libs/themes-base/index.css'
 
// import table and pagination comp
import {VTable,VPagination} from 'vue-easytable'
 
// Register to global
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

// Vue.prototype.axios = axios;

// 使用axios，需要vueAxios辅助
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

import VueI18n from 'vue-i18n'
import i18n from './i18n/i18n'
Vue.use(VueI18n)



/*var A = {
  template: `
    <div>
      <h3>this is component a!</h3>
    </div>
  `,
  data() {
    return {
      name:'tom'
    }
  }
}

Vue.component('blogpost', {
  template: `
    <div>
      <h3>132</h3>
      <div>asdfadsffd</div>
    </div>
  `
})*/


//总线注册,这样注册无效
//var Bus = new Vue();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
