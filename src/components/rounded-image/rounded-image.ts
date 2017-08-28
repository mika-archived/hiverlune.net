import Vue from 'vue';
import Component from 'vue-class-component';

import './rounded-image.scss';

class RoundedImageParams {
  src: string;
}

@Component({
  template: require('./rounded-image.html'),
  props: {
    params: {}
  }
})
export class RoundedImageComponent extends Vue {
  // props
  public params: RoundedImageParams;

  // data
  public src = this.params.src || '';
}
