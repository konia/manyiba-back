var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    config      = require('../config');

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', ['watch'], function() {
  browserSync.init(config.browsersync);
});