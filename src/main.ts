import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

import './sass/main.scss';

import { HomeComponent } from './components/home';

// register the plugin
Vue.use(BootstrapVue);
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent }
  ]
});

new Vue({
  el: '#app-main',
  router: router
});
