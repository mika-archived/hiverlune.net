import Vue from 'vue';
import Component from 'vue-class-component';

class LinkedIconLabelLinkParams {
  text: string;
  href: string;
}

class LinkedIconLabelParrams {
  icon: string;
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

  // msg
  get icon(): string {
    return `fa fa-lg fa-fw fa-${this.params.icon}`;
  }

  get hasLabel(): boolean {
    return this.label !== '';
  }
}
