import Ember from 'ember';
const {Component} = Ember;

export default Component.extend({
  code: null,

  actions: {
    sumbitCode() {
      var codeText = this.get('code');
      var regexFunction = /([a-z_][a-z0-9_]*)+[\s]+([a-z_][a-z0-9_]*)+[()]+[;]/gi;
      var regexClassforName = /class\s*([a-z_]\w*)/gi;
      var regexClassTotal = /class\s*([a-z_]\w*)\s*{(.*)}/gi;


    },

    updateCode(code) {
      this.set('code', code);
    }
  }
});
