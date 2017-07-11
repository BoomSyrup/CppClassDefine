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
      var exceptionDictionary =
      {
        const: "const",
        friend: "friend",
        static: "static"
      };
      var classDictionary = {};
      var toParseArray = [];
      var codeText = this.get('code');

      var regexFunction = /([a-z_]\w*)\s([a-z_]\w*.*?);/gi;
      //var regexClassforName = /class\s*([a-z_]\w*)/gi;
      var regexClassTotal = /class\s*([a-z_]\w*)\s*{([\s\S]*?)};/gim;

      toParseArray = classIntoClassArray(codeText);
      //breaks down each class into their functions

      toParseArray.forEach(function(classElement){
        console.log(classElement[2]);
        var functionDictionary = {};
        var execFunction = regexFunction.exec(classElement[2]);

        //parsing each function
        while(execFunction!=null)
        {
          var functionObj =
          {name:"",
           datatype:"",
           const: false,
           static: false,
          };
          //parsing function for datatype and name
          var  expression = parseForDataAndName(execFunction);
          console.log(expression)
          console.log(expression[2]);
          console.log(expression[1]);
          functionObj.name = expression[2];
          functionObj.datatype = expression[1];
          console.log(functionObj);
          execFunction = regexFunction.exec(classElement[2]);
        }
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

      function parseForDataAndName(textToParse)
      {
        while(textToParse != null && (textToParse[1] in exceptionDictionary))
        {
          textToParse = regexFunction.exec(textToParse[2]);
        }
        return textToParse;
      }
    },

    updateCode(code) {
      this.set('code', code);
    },

    updateTheme(theme) {
      this.set('theme', theme);
    }
  }
});
