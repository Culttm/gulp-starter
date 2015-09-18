var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('cleanHtml', function () {
  return gulp.src('./dist/*.html', {read: false})
    .pipe(clean());
});