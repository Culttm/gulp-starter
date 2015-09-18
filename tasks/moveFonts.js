var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('moveFonts', ['cleanFonts'], function() {
    var src = './src/fonts/*',
        dist = './dist/fonts';
 
    return  gulp.src(src)
            .pipe(plumber({
                errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
            .pipe(changed(dist))
            .pipe(gulp.dest(dist));
});