var gulp = require("gulp");
var browserSync = require('browser-sync');

gulp.task('watch', function () {
  gulp.watch('./src/images/**/*', ['moveImages']);
  gulp.watch('./src/assets/**/*', ['moveAssets']);
  gulp.watch('./src/fonts/**/*', ['moveFonts']);
  gulp.watch('./src/scss/**/*.scss', ['compass']);
  gulp.watch('./src/coffee/**/*.coffee', ['coffee']);
  gulp.watch('./src/**/*.html', ['moveHtml']);
});