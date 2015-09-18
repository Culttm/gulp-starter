var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('moveAssets', ['cleanAssets'], function() {
    var src = './src/assets/*',
        dist = './dist/assets';
 
    return  gulp.src(src)
            .pipe(plumber({
                errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
            .pipe(changed(dist))
            .pipe(imagemin())
            .pipe(gulp.dest(dist));
});