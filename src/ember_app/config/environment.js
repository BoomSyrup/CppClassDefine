/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.classStruct = `#include <iostream>\n
                       #include <string>\n
                       using namespace std;\n\n
                       class person\n
                       {\n
                         public:\n
                           string name;\n
                           int age;\n
                       };`
    ENV.themes =
            [
            'ambiance',
            'blackboard',
            'cobalt',
            'eclipse',
            'erlang-dark',
            'lesser-dark',
            'mbo',
            'mdn-like',
            'monokai',
            'neat',
            'neo',
            'night',
            'paraiso-dark',
            'paraiso-light',
            'pastel-on-dark',
            'rubyblue',
            'solarized',
            'tomorrow-night-eighties',
            'twilight',
            'xq-dark',
            'xq-light'
            ]
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
