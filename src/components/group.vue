<template>
  <div class="bs-docs-section">
    <div class="page-header">
      <h2>
        {{title}}
      </h2>
    </div>
    <contents :children="children" />
  </div>
</template>

<style lang="scss" scoped>
.bs-docs-section {
  padding-bottom: 10px;
}

.page-header {
  padding-bottom: 11px;
  margin: 48px 0 24px;
  border-bottom: 1px solid #eee;
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
export default class Group extends Vue {
  // props
  public params: any;

  // data
  public title: string = '';
  public children: any[] = [];

  public mounted(): void {
    propertyMapping(this, this.params);
  }
}
</script>
