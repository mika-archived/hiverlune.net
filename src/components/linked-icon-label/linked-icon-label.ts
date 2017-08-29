import Vue from 'vue';
import Component from 'vue-class-component';

class LinkedIconLabelLinkParams {
  text: string;
  href: string;
}

class LinkedIconLabelParrams {
  icon: string | Array<string>;
  extra: string | Array<string>;
  label: string;
  __raw: string;
  link: LinkedIconLabelLinkParams;
}

@Component({
  template: require('./linked-icon-label.html'),
  props: {
    params: {}
  }
})
export class LinkedIconLabelComponent extends Vue {
  // props
  public params: LinkedIconLabelParrams;

  // data
  public label: string = this.params.label || '';
  public raw: string = this.params.__raw || '';
  public link: LinkedIconLabelLinkParams = this.params.link || { text: '', href: '#' };
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
