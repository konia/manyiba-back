var gulp = require('gulp');
var config = require('../config').images;
/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
