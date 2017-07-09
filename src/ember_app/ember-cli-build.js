/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    codemirror: {
      modes: ['clike'],
      themes: [
        '3024-day',
        '3024-night',
        'ambiance',
        'ambiance-mobile',
        'base16-dark',
        'base16-light',
        'blackboard',
        'cobalt',
        'eclipse',
        'elegant',
        'erlang-dark',
        'lesser-dark',
        'mbo',
        'mdn-like',
        'midnight',
        'monokai',
        'neat',
        'neo',
        'night',
        'paraiso-dark',
        'paraiso-light',
        'pastel-on-dark',
        'rubyblue',
        'solarized',
        'the-matrix',
        'tomorrow-night-eighties',
        'twilight',
        'vibrant-ink',
        'xq-dark',
        'xq-light'
        ]
      }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
