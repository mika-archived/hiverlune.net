<template>
  <div class="container">
    <h1>hiverlune.net</h1>
    <transition name="load-animation" enter-active-class="animated fadeIn">
      <contents v-if="loaded" :children="children"/>
    </transition>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Home extends Vue {
  public children = [];
  protected axios: any;

  // data
  public loaded: boolean = false;

  constructor() {
    super();
    this.axios = axios;
  }

  mounted() {
    this.$nextTick(async () => {
      await this.load();
    });
  }

  private async load() {
    this.children = require("../main.json");
    this.loaded = true;
  }
}
</script>
