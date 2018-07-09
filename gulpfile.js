'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
    return gulp.src('src/assets/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCSS())
      .pipe(gulp.dest('src'));
  });

gulp.task('js', function(){
  return gulp.src('src/assets/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/js'))
});

gulp.task('default', function(){

    // watch me getting Sassy
    gulp.watch("src/assets/scss/**/*.scss", function(event){
        gulp.run('css');
    });
    // make my JavaScript ugly
    gulp.watch("src/assets/js/**/*.js", function(event){
        gulp.run('js');
    }); 

});
          