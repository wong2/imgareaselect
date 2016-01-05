var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssBase64 = require('gulp-css-base64');


gulp.task('minify', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('css', function() {
  return gulp.src('src/*.css')
    .pipe(cssBase64())
    .pipe(gulp.dest('dist'));
});


gulp.task('default', ['minify', 'css']);
