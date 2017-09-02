<template>
  <a :href="href" target="_blank">
    {{text}}
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { propertyMapping } from '../utils';

@Component({ props: { params: {} } })
export default class Link extends Vue {
  public params: any;

  // data
  public href: string = '';
  public text: string = '';

  constructor() {
    super();
    propertyMapping(this, this.params);
  }
}
</script>
