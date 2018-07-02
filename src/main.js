// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

//引入element 计数器
import {InputNumber} from 'element-ui'

//引入vux 计数器
import {InlineXNumber} from 'vux'
import {Alert} from 'vux'
import {Confirm} from 'vux'

// Import App Component
import App from './app';

import store from './store';

import axios from 'axios'
import VueAxios from 'vue-axios'

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)
Vue.use(InputNumber)
Vue.component('inline-x-number', InlineXNumber)
Vue.component('alert',Alert)
Vue.component('comfirm',Confirm)
Vue.use(VueAxios,axios)

//Vue.prototype.$axios = axios

// Vue.use(axios)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  store,
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'md', // Automatic theme detection
      root: '#app',
      /* Uncomment to enable Material theme: */
      material: true,
      modalTitle: '',
      modalButtonOk: '确认',
      modalButtonCancel: '取消',
      modalPreloaderTitle: '加载中...',
      cache: false,
      domCache: false,
      pushState: true,
      swipePanel: 'left',
      swipeBackPage: false,
      swipePanelThreshold: 15,
      smartSelectBackText: '返回',
      smartSelectPickerCloseText: '完成',
      smartSelectPopupCloseText: '关闭',
      swipePanelOnlyClose: true,
      preloadPreviousPage: false,
      uniqueHistory: true,
    // App routes
    routes: Routes,

  },
  // Register App Component
  components: {
    app: App
  }
});
