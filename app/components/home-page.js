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

      var regexFunction = /([a-z_]\w*)\s([a-z_]\w*.*?[(][a-z_]*\w*.*?[)]);/gi;
      //var regexClassforName = /class\s*([a-z_]\w*)/gi;
      var regexClassTotal = /class\s*([a-z_]\w*)\s*{([\s\S]*?)};/gim;

      var toParseArray = [];
      toParseArray = classIntoClassArray(codeText);
      //breaks down each class into their functions

      toParseArray.forEach(function(classElement){
        //console.log(classElement[2]);
        //functionArray holds functionObj's and this functon will go to classFucntions
        var functionArray = [];
        //parsing each function
        var execFunction = regexFunction.exec(classElement[2]);
        while(execFunction!=null)
        {
          var functionObj =
          {
           name:"",
           datatype:""
          };
          //parsing function for datatype and name
          // console.log(execFunction)
          // console.log(execFunction[2]);
          // console.log(execFunction[1]);
          functionObj.name = execFunction[2];
          functionObj.datatype = execFunction[1];
          // console.log(functionObj);
          //pushes functions into function array
          functionArray.push(functionObj);
          execFunction = regexFunction.exec(classElement[2]);
        }
        //puts all the functions under a class in classFucntions
        var classObj = {
          className: classElement[1],
          functions: functionArray
        };
        classDictionary.push(classObj);
        // console.log(classDictionary);
      });

      classDictionary.forEach(function(classElement){
        var className = classElement.className;
        var printString = "";
        classElement.functions.forEach(function(functionObj)
        {
          var functionString = functionObj.datatype + " " + className + "::"+ functionObj.name + "{\n\n}" + "\n\n\n"
          printString += functionString;
        });
        console.log(printString);
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
      };
    },

    updateCode(code) {
      this.set('code', code);
    },

    updateTheme(theme) {
      this.set('theme', theme);
    }
  }
});
