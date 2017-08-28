import Vue from 'vue';

export class Panel<T> extends Vue {
  // Props
  public contents: T;
}
