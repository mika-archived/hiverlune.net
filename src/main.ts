// global
import * as tslib from 'tslib';

import Vue from 'vue';
import VueRouter from 'vue-router';

import './styles/main.scss';

import Contents from './components/contents.vue';
import Grid from './components/Grid.vue';
import Group from './components/Group.vue';
import Home from './components/home.vue';

Vue.use(VueRouter);
Vue.component('contents', Contents);
Vue.component('grid', Grid);
Vue.component('group', Group);

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
