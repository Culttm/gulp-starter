var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');

gulp.task('moveHtml', ['cleanHtml'], function() {
    var htmlSrc = './src/**/*.html',
        htmlDst = './dist/';
 
    return  gulp.src(htmlSrc)
            .pipe(plumber({
                errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
            .pipe(changed(htmlDst))
            .pipe(gulp.dest(htmlDst));
});