require('./assets/css/reset.css')
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import  routerMap from './router'

/* eslint-disable no-new */
Vue.use(Router);
const router = new Router();
routerMap(router);
router.start(App, 'body');
//new Vue({
//  el: 'body',
//  components: { App }
//})
