var gulp = require('gulp');
var combineMq = require('gulp-combine-mq');
 
gulp.task('combineMq', ['compass'], function () {
    return gulp.src('./src/css/tmp/style.css')
    .pipe(combineMq({
        beautify: true
    }))
    .pipe(gulp.dest('./dist/css'));
});