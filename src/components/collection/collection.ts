import Vue from 'vue';
import Component from 'vue-class-component';

class CollectionParams {
  component: string;
  params: object;
  style: object;
  content: object;
}

@Component({
  template: require('./collection.html'),
  props: {
    contents: {}
  }
})
export class CollectionComponent extends Vue {
  // props
  public contents: CollectionParams[];

  public stylify(styles: object): string {
    if (styles == null) {
      return '';
    } else {
      return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';');
    }
  }
}
