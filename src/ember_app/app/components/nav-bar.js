import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sumbitPressed() {
      this.sendAction();
    }
  }
});
