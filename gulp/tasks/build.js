var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
gulp.task('clean:build', function () {
  return del(['dist']);
});
gulp.task('build', ['clean:build'], function (callback) {
  return runSequence('sass', [
      'scripts',
      'pug',
      'images',
      'copy:fonts',
      'browsersync',
      'watch'
    ],
    callback
  );
});
