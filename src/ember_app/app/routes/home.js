import Ember from 'ember';

export default Ember.Route.extend({
  code: null,

  actions: {
    sumbitCode() {
      var codeText = this.get('code');
      var regexFunction = /([a-z_][a-z0-9_]*)+[\s]+([a-z_][a-z0-9_]*)+[()]+[;]/gi;

    },

    updateCode(code) {
      this.set('code', code);
    }
  }
});
