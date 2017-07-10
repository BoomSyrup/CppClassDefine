import Ember from 'ember';
const {Component} = Ember;

export default Component.extend({
  code: null,

  actions: {
    sumbitCode() {
      var code = this.get('code');
      if (!!code && code.trim().length > 0){
        alert(code);
      }
    },

    updateCode(code) {
      this.set('code', code);
    }
  }
});
