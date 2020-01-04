var gulp = require('gulp');
var config = require('../config').scripts;
/**
 * Run JavaScript through Browserify
 */
gulp.task('scripts', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
})
