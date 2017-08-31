// global
import * as tslib from 'tslib';

import Vue from 'vue';
import VueRouter from 'vue-router';

import './styles/main.scss';

import Home from './components/home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home }
  ]
});

const vue = new Vue({
  render: (w) => w(Home),
  router,
});
vue.$mount('#root');
