var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('cleanCss', function () {
  return gulp.src('./dist/css/*.*', {read: false})
    .pipe(clean());
});