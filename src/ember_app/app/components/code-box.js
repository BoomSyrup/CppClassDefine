import Ember from 'ember';
import config from '../config/environment';
const {Component} = Ember;

export default Component.extend({
  codePlaceholder: config.classStruct,

  actions: {
    textChanged(event) {
      let text = event.target.value;
      this.sendAction('action', text);
    }
  }
});
