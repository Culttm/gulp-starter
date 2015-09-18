var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('cleanFonts', function () {
  return gulp.src('./dist/fonts/**/*', {read: false})
    .pipe(clean());
});