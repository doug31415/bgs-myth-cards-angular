
(function(){
  'use strict';

  var gulp = require('gulp');

  gulp.task('watch', ['jshint'] ,function () {
    gulp.watch('src/assets/configuration/**/*',  ['configuration']);
    gulp.watch('src/assets/i18n/**/*',           ['i18n']);
    gulp.watch('src/assets/images/**/*',         ['images']);
    gulp.watch('src/assets/less/**/*',           ['less']);
    gulp.watch('src/assets/mockData/**/*',       ['mocks']);
    gulp.watch('src/assets/plugins/**/*',        ['js']);
    gulp.watch('src/js/**/*.js',                 ['js']);
    gulp.watch('src/templates/**/*.html',        ['js']);
    gulp.watch('bower.json',                     ['wiredep']);
    gulp.watch('src/index.html',                 ['build']);
  });

})();
