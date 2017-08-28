import Vue from 'vue';
import VueRouter from 'vue-router';

import './sass/main.scss';

import { CollectionComponent } from './components/collection';
import { HomeComponent } from './components/home';
import { LabeledIconComponent } from './components/labeled-icon';
import { MediaObjectComponent } from './components/media-object';
import { RoundedImageComponent } from './components/rounded-image';

// register the plugin
Vue.use(VueRouter);

// register components
Vue.component('collection', CollectionComponent);
Vue.component('labeled-icon', LabeledIconComponent);
Vue.component('media-object', MediaObjectComponent);
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
