<template>
  <div>
    <img :src="src" alt="">
  </div>
</template>

<style lang="scss" scoped>
img {
  border-radius: 100%;
  width: 80%;
  max-width: 200px;
  margin: 15px 0;
  height: auto;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { propertyMapping } from '../utils';

@Component({
  props: {
    params: {}
  }
})
export default class RoundedImage extends Vue {
  // props
  public params: any;

  // data
  public src: string = '';

  constructor() {
    super();
    propertyMapping(this, this.params);
  }
}
</script>
