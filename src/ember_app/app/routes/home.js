import Ember from 'ember';

export default Ember.Route.extend({
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
    },

    updateCode(code) {
      this.set('code', code);
    }
  }
});
