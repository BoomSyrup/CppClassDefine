import Ember from 'ember';
import config from '../config/environment';
const { Component } = Ember;

export default Component.extend({
  themes: config.themes,
  currentTheme: 'paraiso-dark',

  actions: {
    themeChanged(theme){
      this.set('currentTheme', theme);
      this.sendAction('action', theme);
    }
  }
});
