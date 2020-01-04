var gulp = require('gulp');
var config = require('../config').watch,
  browserSync = require('browser-sync');
/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', function () {
  gulp.watch(config.sass, ['sass'], browserSync.reload());
  gulp.watch(config.scripts, ['scripts'], browserSync.reload());
  gulp.watch(config.images, ['images']);
  gulp.watch(config.copyfonts, ['copy:fonts']);
  gulp.watch(config.pug, ['pug']);
});
