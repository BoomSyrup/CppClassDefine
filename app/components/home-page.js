import Ember from 'ember';
const {Component} = Ember;

export default Component.extend({
  init() {
    this._super();
    this.set('theme', 'paraiso-dark');
  },

  code: null,
  theme: null,

  actions: {
    sumbitCode() {
      var classDictionary = [];
      var codeText = this.get('code');

      var regexFunction = /([a-z_]\w*)\s([a-z_]\w*.*?);/gi;
      //var regexClassforName = /class\s*([a-z_]\w*)/gi;
      var regexClassTotal = /class\s*([a-z_]\w*)\s*{([\s\S]*?)};/gim;

      var toParseArray = [];
      toParseArray = classIntoClassArray(codeText);
      //breaks down each class into their functions

      toParseArray.forEach(function(classElement){
        console.log(classElement[2]);
        //classFunctions is an object to put into classDictionary
        var classFunctions = {className:"", functions: []};
        //functionArray holds functionObj's and this functon will go to classFucntions
        var functionArray = [];
        //parsing each function
        var execFunction = regexFunction.exec(classElement[2]);
        while(execFunction!=null)
        {
          var functionObj =
          {
           name:"",
           datatype:"",
          };
          //parsing function for datatype and name
          console.log(expression)
          console.log(expression[2]);
          console.log(expression[1]);
          functionObj.name = expression[2];
          functionObj.datatype = expression[1];
          console.log(functionObj);
          //pushes functions into function array
          functionArray.push(functionObj);
          execFunction = regexFunction.exec(classElement[2]);
        }
        //puts all the functions under a class in classFucntions
        classFunctions.push({className: classElement[1], functions: functionArray});
        classDictionary.push(classFunctions);
      });


      function classIntoClassArray(codeText)
      {
        var execClass = regexClassTotal.exec(codeText);
        while(execClass!=null)
        {
          toParseArray.push(execClass);
          execClass = regexClassTotal.exec(codeText);
        }
        return toParseArray;
      }

    updateCode(code) {
      this.set('code', code);
    },

    updateTheme(theme) {
      this.set('theme', theme);
    }
  }
});
