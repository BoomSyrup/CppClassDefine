import Ember from 'ember';

export default Ember.Component.extend({
  themes: ['paraiso-dark','paraiso-light', 'monokai'],
  currentTheme: 'paraiso-dark',

  actions: {
    themeChanged(theme){
      this.set('currentTheme', theme);
      this.sendAction('action', theme);
    }
  }
});
