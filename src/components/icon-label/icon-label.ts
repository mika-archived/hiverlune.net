import Vue from 'vue';
import Component from 'vue-class-component';

import './icon-label.scss';

class IconLabelParrams {
  icon: string | Array<string>;
  extra: string | Array<string>;
  label: string;
  __raw: string;
}

@Component({
  template: require('./icon-label.html'),
  props: {
    params: {}
  }
})
export class IconLabelComponent extends Vue {
  // props
  public params: IconLabelParrams;

  // data
  public label: string = this.params.label || '';
  public raw: string = this.params.__raw || '';
  public stacked: boolean = !(typeof this.params.icon === 'string');

  // msg
  get icon(): string {
    return this.getIconClass(0);
  }

  get icon1(): string {
    return this.getIconClass(0);
  }

  get icon2(): string {
    return this.getIconClass(1);
  }

  get hasLabel(): boolean {
    return this.label !== '';
  }

  private getIconClass(index: number) {
    let line = `fa fa-${this.getValue(this.params.icon, index)}`;
    if (this.getValue(this.params.extra, index) !== '') {
      line += ` ${this.getValue(this.params.extra, index)}`;
    }
    if (this.stacked) {
      let stackIndex = index === 0 ? 1 : 2;
      line += ` fa-stack-${stackIndex}x`;
    } else {
      line += ' fa-fw fa-lg';
    }
    return line;
  }

  private getValue(obj: any, index: number) {
    if (obj === null) {
      return '';
    }
    if (this.stacked) {
      return obj[index] || '';
    } else {
      return obj || '';
    }
  }
}
