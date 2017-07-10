import Ember from 'ember';
const {Component} = Ember;

export default Component.extend({
  init() {
    this._super();
    this.set('theme', this.get('defaultTheme'));
  },

  code: null,
  theme: null,
  defaultTheme: 'paraiso-dark',

  actions: {
    sumbitCode() {
      var codeText = this.get('code');
      var regexFunction = /([a-z_]\w*)\s([a-z_]\w*)((.*?));/gi;
      //var regexClassforName = /class\s*([a-z_]\w*)/gi;
      var regexClassTotal = /class\s*([a-z_]\w*)\s*{([^}]*?)};/gi;
      var toParseArray = [];
      var execClass = regexClassTotal.exec(codeText);
      while(execClass!=null)
      {
        toParseArray.push(execClass);
        execClass = regexClassTotal.exec(codeText);
      }
      toParseArray.forEach(function(classElement){
        console.log(classElement);
      });
      var classDictionary = {};
    },

    updateCode(code) {
      this.set('code', code);
    },

    updateTheme(theme) {
      this.set('theme', theme);
    }
  }
});
