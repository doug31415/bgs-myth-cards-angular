
(function(){
  'use strict';

  module.exports = function(config) {

    config.set({
      basePath : '..', // Ignored through gulp-karma

      files : [ // Ignored through gulp-karma
        '**/*.html'
      ],

      autoWatch : false,

      frameworks: ['jasmine'],

      browsers : ['PhantomJS'],

      preprocessors: {
        'src/templates/**/*.html': ['ng-html2js'] // use for desktop tests
      },

      ngHtml2JsPreprocessor: {
        stripPrefix: 'src/templates/',
        moduleName: 'bgs.templates' // include beforeEach( module( 'isc.templates' )) in unit tests
      },

      plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-ng-html2js-preprocessor'
      ]
    });
  };
})();
