<template>
  <div>
    <div :key="index" v-for="(w, index) in children">
      <div :is="w.component" :params="w" :style="w.style" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { propertyMapping } from '../utils';

@Component({
  props: {
    children: {}
  }
})
export default class Contents extends Vue {
  public children: {};

  constructor() {
    super();
  }
}
</script>
