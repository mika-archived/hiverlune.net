import Vue from 'vue';
import VueRouter from 'vue-router';

import './sass/main.scss';

import { CollectionComponent } from './components/collection';
import { HomeComponent } from './components/home';
import { IconLabelComponent } from './components/icon-label';
import { LinkedIconLabelComponent } from './components/linked-icon-label';
import { MediaObjectComponent } from './components/media-object';
import { MultiColumnComponent } from './components/multi-column';
import { RoundedImageComponent } from './components/rounded-image';

// register the plugin
Vue.use(VueRouter);

// register components
Vue.component('collection', CollectionComponent);
Vue.component('icon-label', IconLabelComponent);
Vue.component('linked-icon-label', LinkedIconLabelComponent);
Vue.component('media-object', MediaObjectComponent);
Vue.component('multi-column', MultiColumnComponent);
Vue.component('rounded-image', RoundedImageComponent);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent }
  ]
});

new Vue({
  el: '#app-main',
  router: router,
  components: {
  }
});
