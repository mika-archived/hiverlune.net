import axios, { AxiosResponse } from 'axios';
import Vue from 'vue';
import Component from 'vue-class-component';

import './home.scss';

@Component({
  template: require('./home.html')
})
export class HomeComponent extends Vue {
  public sections = [];
  protected axios;

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
    if (process.env.ENV === 'development') {
      this.sections = require('../../data/contents.json').sections;
    } else {
      const response = await this.axios.get('https://raw.githubusercontent.com/mika-f/hiverlune.net/master/src/data/contents.json');
      this.sections = response.data.sections;
    }
  }
}
