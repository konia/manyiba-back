var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var config = require('../config');
/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass-lint', function () {
  return gulp.src(config.sass.src)
    .pipe($.plumber({ errorHandler: $.notify.onError("Error: <%= error.message %>") }))
    .pipe($.sassLint({
      options: {
        formatter: 'stylish',
      },
      files: {
        ignore: 'src/scss/util/*.scss'
      }
    }))
    .pipe($.sassLint.format());
});
gulp.task('sass', ['sass-lint'], function () {
  return gulp.src(config.sass.src)
    .pipe($.debug({ title: 'compile:' }))
    .pipe($.plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
    .pipe($.sass())
    .pipe(gulp.dest(config.sass.dest))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.sourcemaps.init())
    .pipe($.autoprefixer(config.autoprefixer))
    .pipe($.cleanCss(config.cleanCSS))
    .pipe($.base64())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({ stream: true }));
});
