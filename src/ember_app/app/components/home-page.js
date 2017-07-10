import Ember from 'ember';
const {Component} = Ember;

export default Component.extend({
  code: null,

  actions: {
    sumbitCode() {
      var codeText = this.get('code');
      codeText = codeText.replace(/\s\s+/g, " ");
      var codeArray = codeText.split(" ");
      codeArray.forEach(function(element)
      {
        console.log(element);
      });
      var classIndex = codeArray.indexOf("class");
      var className = codeArray[classIndex + 1];
      className = className.replace(/[^0-9a-z_-]/gi, '');
      alert(className);
      var regexFunction = /([a-z_][a-z0-9_]*)+[\s]+([a-z_][a-z0-9_]*)+[()]+[;]/gi;

    },

    updateCode(code) {
      this.set('code', code);
    }
  }
});
