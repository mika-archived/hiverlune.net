import Vue from 'vue';
import Component from 'vue-class-component';

import { Panel } from '../Panel';
import './media-object.scss';

class MediaObjectParams {
  left: number;
  right: number;
}

class MediaObjectContents {
  left: {};
  right: {};
}

@Component({
  template: require('./media-object.html'),
  props: {
    params: {},
    contents: {}
  }
})
export class MediaObjectComponent extends Panel<MediaObjectContents> {
  // props
  public params: MediaObjectParams;

  // data
  public leftContent = this.contents.left || [];
  public rightContent = this.contents.right || [];

  // computed
  get leftCol(): string {
    return `col-sm-${this.params.left}`;
  }

  get rightCol(): string {
    return `col-sm-${this.params.right}`;
  }
}
