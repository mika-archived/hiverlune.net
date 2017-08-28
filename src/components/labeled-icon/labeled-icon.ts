import Vue from 'vue';
import Component from 'vue-class-component';

class LabeledIconParrams {
  icon: string;
  label: string;
  __raw: string;
}

@Component({
  template: require('./labeled-icon.html'),
  props: {
    params: {}
  }
})
export class LabeledIconComponent extends Vue {
  // props
  public params: LabeledIconParrams;

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
