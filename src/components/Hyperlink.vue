<template>
  <span>
    <template v-if="isInternal">
      {{text}}
    </template>
    <template v-else>
      <a :href="href" :target="target">
        {{text}}
      </a>
    </template>
  </span>
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

  // computed
  public get isInternal(): boolean {
    return this.href.startsWith('/') || this.href.startsWith('#');
  }
  
  public get target(): string {
    if (this.href.startsWith('https://') || this.href.startsWith('http://')) {
      return '_blank';
    }
    return '_self';
  }

  constructor() {
    super();
    propertyMapping(this, this.params);
  }
}
</script>
