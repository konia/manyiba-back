var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  del = require('del'),
  config = require('../config').pug;
gulp.task('pug', function () {
  return gulp.src(config.src)
    .pipe($.debug({ title: 'compile:' }))
    .pipe($.plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
    .pipe($.pug({ pretty: true }))
    .pipe(gulp.dest(config.dest))
});
