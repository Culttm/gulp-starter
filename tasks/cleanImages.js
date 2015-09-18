var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('cleanImages', function () {
  return gulp.src('./dist/images/**/*', {read: false})
    .pipe(clean());
});