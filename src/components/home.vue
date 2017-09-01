<template>
  <div class="container">
    <h1>hiverlune.net</h1>
    <contents :children="children" />
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from 'axios';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {
  public children = [];
  protected axios: any;

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
    if (process.env.ENV === 'production') {
      const response = await this.axios.get('https://raw.githubusercontent.com/mika-f/hiverlune.net/master/src/main.json');
      this.children = response.data;
    } else {
      this.children = require('../main.json');
    }
  }
}
</script>
