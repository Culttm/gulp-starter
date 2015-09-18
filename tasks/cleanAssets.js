var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('cleanAssets', function () {
  return gulp.src('./dist/assets/**/*', {read: false})
    .pipe(clean());
});