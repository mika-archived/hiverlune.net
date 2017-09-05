<template>
  <div class="row">
    <div :key="index" :class="col(index)" v-for="index in size">
      <div :is="colComponent(index)" :params="colParams(index)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

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
export default class Grid extends Vue {
  // props
  public params: any;

  // data
  public base: string = '';
  public children: any[] = [];
  public xs: number | number[] = 0;
  public sm: number | number[] = 0;
  public md: number | number[] = 0;
  public lg: number | number[] = 0;
  public xl: number | number[] = 0;

  constructor() {
    super();
    propertyMapping(this, this.params);
  }

  get size(): number {
    const cols = this.params[`@${this.base}`];
    if (Array.isArray(cols)) {
      return cols.length;
    } else {
      return 12 / cols;
    }
  }

  public col(index: number): string {
    let clazz = [];
    if (this.isValid(this.xs, index)) {
      clazz.push(`col-${this.getValue(this.xs, index)}`);
    }
    if (this.isValid(this.sm, index)) {
      clazz.push(`col-sm-${this.getValue(this.sm, index)}`);
    }
    if (this.isValid(this.md, index)) {
      clazz.push(`col-md-${this.getValue(this.md, index)}`);
    }
    if (this.isValid(this.lg, index)) {
      clazz.push(`col-lg-${this.getValue(this.lg, index)}`);
    }
    if (this.isValid(this.xl, index)) {
      clazz.push(`col-xl-${this.getValue(this.xl, index)}`);
    }
    return clazz.join(' ');
  }

  public colComponent(index: number): any {
    return this.colParams(index).component;
  }

  public colParams(index: number): any {
    return this.children[index - 1];
  }

  private isValid(obj: any, index: number): boolean {
    if (obj === null) {
      return false;
    }
    if (Array.isArray(obj)) {
      return obj.length > (index - 1);
    } else {
      return obj > 0;
    }
  }

  private getValue(obj: any, index: number): string {
    if (Array.isArray(obj)) {
      return obj[index - 1];
    } else {
      return obj;
    }
  }
}
</script>
