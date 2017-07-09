import Ember from 'ember';
import config from '../config/environment';
const {Component} = Ember;

export default Component.extend({
  codePlaceholder: config.classStruct,

  actions: {
    valueUpdated(myCode) {
      if (!!myCode) {
        this.sendAction('action', myCode);
      }
    }
  }
});
