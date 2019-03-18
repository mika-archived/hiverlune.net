<template>
  <span>
    <template v-if="hasLabel">{{text}}</template>
    <template v-else>
      <span v-html="raw"/>
    </template>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { propertyMapping } from "../utils";

@Component({ props: { params: {} } })
export default class Label extends Vue {
  public params: any;

  // data
  public text: string = "";
  public raw: string = "";

  constructor() {
    super();
    propertyMapping(this, this.params);
  }

  // msg
  get hasLabel(): boolean {
    return this.text !== "";
  }
}
</script>
