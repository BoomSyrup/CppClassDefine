import Ember from 'ember';

export default Ember.Route.extend({
  code: null,

  actions: {
    sumbitCode() {
      alert(this.get('code'));
    },

    updateCode(code) {
      this.set('code', code);
    }
  }
});
