/*global require*/
"use strict";

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

var paths = {
  dist: './dist/',
  pug: './src/*.pug',
}

gulp.task('default', ['pug', 'watch'], function () {})

gulp.task('watch', ['browserSync'], function () {
  gulp.watch("./src/**/**/*", ['pug'])
})

gulp.task('pug', function () {
  return gulp.src(paths.pug)
    .pipe(pug())
    .on('error', function (err) {
        process.stderr.write(err.message + '\n');
        this.emit('end');
      })
    .pipe(gulp.dest(paths.dist))
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: paths.dist
    },
  })
})