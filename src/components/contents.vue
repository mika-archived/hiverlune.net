<template>
  <div>
    <template v-if="children">
      <div :key="index" v-for="(w, index) in children">
        <div :is="w.component" :params="w" :style="w.class" />
      </div>
    </template>
    <template v-else>
      <div :key="index" v-for="(w, index) in params.children">
        <div :is="w.component" :params="w" :class="w.class" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { propertyMapping } from '../utils';

@Component({
  props: {
    children: {},
    params: {}
  }
})
export default class Contents extends Vue {
  public children: {};
  public params: any;
}
</script>
