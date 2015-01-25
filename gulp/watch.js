
(function(){
  'use strict';

  var gulp = require('gulp');

  gulp.task('watch:desktop', ['jshint'] ,function () {
    gulp.watch('src/assets/configuration/**/*',  ['configuration']);
    gulp.watch('src/assets/i18n/**/*',           ['i18n']);
    gulp.watch('src/assets/images/**/*',         ['images']);
    gulp.watch('src/assets/sass/**/*',           ['sass']);
    gulp.watch('src/js/common/assets/sass/**/*', ['sass']);
    gulp.watch('src/assets/mockData/**/*',       ['mocks']);
    gulp.watch('src/assets/plugins/**/*',        ['js:desktop']);
    gulp.watch('src/js/**/*.js',                 ['js:desktop']);
    gulp.watch('src/templates/**/*.html',        ['js:desktop']);
    gulp.watch('bower.json',                     ['wiredep']);
    gulp.watch('src/index.html',                 ['js:desktop']);
  });

  gulp.task('watch:phonegap', ['jshint'] ,function () {
    gulp.watch('src/assets/configuration/**/*', ['configuration']);
    gulp.watch('src/assets/i18n/**/*',          ['i18n']);
    gulp.watch('src/assets/images/**/*',        ['images']);
    gulp.watch('src/assets/sass/**/*',          ['sass']);
    gulp.watch('src/assets/mockData/**/*',      ['mocks']);
    gulp.watch('src/assets/plugins/**/*',       ['js:phonegap']);
    gulp.watch('src/js/**/*',                   ['js:phonegap']);
    gulp.watch('src/templates/**/*.html',       ['js:phonegap']);
    gulp.watch('bower.json',                    ['wiredep']);
    gulp.watch('src/index.html',                ['js:phonegap']);
  });
})();
