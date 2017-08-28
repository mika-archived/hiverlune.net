import Vue from 'vue';
import Component from 'vue-class-component';

class IconLabelParrams {
  icon: string;
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

  // msg
  get icon(): string {
    return `fa fa-lg fa-fw fa-${this.params.icon}`;
  }

  get hasLabel(): boolean {
    return this.label !== '';
  }
}
