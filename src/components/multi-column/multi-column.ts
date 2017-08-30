import Vue from 'vue';
import Component from 'vue-class-component';

import { Panel } from '../Panel';

class MultiColumnParams {
  base: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

@Component({
  template: require('./multi-column.html'),
  props: {
    params: {},
    contents: {
      type: Array,
      default: []
    }
  }
})
export class MultiColumnComponent extends Panel<{}> {
  // props
  public params: MultiColumnParams;

  // computed
  get size(): number {
    return 12 / this.params[this.params.base];
  }

  get col(): string {
    let line = [];
    if (this.isValid(this.params.xs)) {
      line.push(`col-${this.params.xs}`);
    }
    if (this.isValid(this.params.sm)) {
      line.push(`col-sm-${this.params.sm}`);
    }
    if (this.isValid(this.params.md)) {
      line.push(`col-md-${this.params.md}`);
    }
    if (this.isValid(this.params.lg)) {
      line.push(`col-lg-${this.params.lg}`);
    }
    if (this.isValid(this.params.xl)) {
      line.push(`col-xl-${this.params.xl}`);
    }
    return line.join(' ');
  }

  public getContents(index: number): object {
    return this.contents[index - 1];
  }

  private isValid(obj: any): boolean {
    return obj !== undefined && typeof obj === 'number';
  }
}
