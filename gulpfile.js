'use strict';

// ---- includes
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const del = require('del');
const runSequence = require('run-sequence');
const scss = require('postcss-scss');

// ---- config
var config = {
  src: 'anvil',
  dist: 'tongs'
};

// ---- watchers
gulp.task('watch', function() {
  gulp.watch(config.src + '/**/*.scss', ['default']);
});

// ---- tasks
gulp.task('sass', function() {
  return gulp
    .src(config.src + '/scss/**/*.scss')
    .pipe(sass())
    .pipe(
      postcss(
        [
          autoprefixer({
            browsers: ['last 5 versions']
          })
        ],
        { syntax: scss }
      )
    )
    .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('css', ['sass'], function() {
  return gulp
    .src(config.dist + '/css/*.css')
    .pipe(concatCss('bundle.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.dist + '/css/'));
});

gulp.task('clean:dist', function() {
  return del.sync(config.dist);
});

// ---- task commands
gulp.task('default', function(cb) {
  runSequence('clean:dist', ['css'], cb);
});

gulp.task('hammer', function(cb) {
  runSequence(['default'], ['watch'], cb);
});
