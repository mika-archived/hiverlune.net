<template>
  <p>
    <template v-if="stacked">
      <span class="fa-fw fa-stack">
        <i :class="icon1"></i>
        <i :class="icon2"></i>
      </span>
    </template>
    <template v-else>
      <i :class="icon1" aria-hidden="true"></i>
    </template>
    <h-label :params="{'@text': label, '@raw': raw}"/>
  </p>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { propertyMapping } from "../utils";

@Component({
  props: {
    params: {}
  }
})
export default class IconLabel extends Vue {
  public params: any;

  // data
  public icon: string = "";
  public label: string = "";
  public raw: string = "";
  public extra: string = "";

  constructor() {
    super();
    propertyMapping(this, this.params);
  }

  // msg
  get stacked(): boolean {
    return !(typeof this.icon === "string");
  }

  get icon1(): string {
    return this.getIconClass(0);
  }

  get icon2(): string {
    return this.getIconClass(1);
  }

  get hasLabel(): boolean {
    return this.label !== "";
  }

  private getIconClass(index: number) {
    let line = this.getValue(this.icon, index);
    if (this.getValue(this.extra, index) !== "") {
      line += ` ${this.getValue(this.extra, index)}`;
    }
    if (this.stacked) {
      let stackIndex = index === 0 ? 1 : 2;
      line += ` fa-stack-${stackIndex}x`;
    } else {
      line += " fa-fw fa-lg";
    }
    return line;
  }

  private getValue(obj: any, index: number) {
    if (obj === null) {
      return "";
    }
    if (this.stacked) {
      return obj[index] || "";
    } else {
      return obj || "";
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-stack.fa-fw {
  width: 2.5714285714285716em;
}
</style>