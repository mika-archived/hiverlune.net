<template>
  <div class="container">
    <h1>hiverlune.net</h1>
    <div class="bs-docs-section" :key="section" v-for="section in sections">
      <div class="page-header">
        <h2>
          {{section.title}}
        </h2>
      </div>
      <div :is="section.layout" :params="section.params" :contents="section.contents" />
    </div>
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
import axios, { AxiosResponse } from 'axios';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {
  public sections = [];
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
    console.log(process.env.ENV);
    if (process.env.ENV === 'production') {
      const response = await this.axios.get('https://raw.githubusercontent.com/mika-f/hiverlune.net/master/src/data/contents.json');
      this.sections = response.data.sections;
    } else {
      this.sections = require('../data/contents.json').sections;
    }
  }
}
</script>
