<template>
  <ul>
    <li :key="index" v-for="(w, index) in children">
      <div :is="w.component" :params="w" :style="w.class" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { propertyMapping } from '../utils';

@Component({ props: { params: {} } })
export default class Link extends Vue {
  public params: any;

  // data
  public children: any[] = [];

  constructor() {
    super();
    propertyMapping(this, this.params);
  }
}
</script>
