
(function(){
  'use strict';

  var gulp = require('gulp');

  gulp.task('watch', ['jshint'] ,function () {
    gulp.watch('src/assets/configuration/**/*',    ['configuration']);
    gulp.watch('src/assets/i18n/**/*',             ['i18n']);
    gulp.watch('src/assets/images/**/*',           ['images']);
    gulp.watch('src/js/common/assets/images/**/*', ['images']);
    gulp.watch('src/assets/sass/**/*',             ['sass']);
    gulp.watch('src/assets/mockData/**/*',         ['mocks']);
    gulp.watch('src/assets/plugins/**/*',          ['js']);
    gulp.watch('src/js/**/*.js',                   ['js']);
    gulp.watch('src/js/**/*.html',          ['js']);
    gulp.watch('src/index.html',                   ['js', 'sass']);
    gulp.watch('bower.json',                       ['wiredep']);
  });


})();
