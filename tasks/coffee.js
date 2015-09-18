var gulp = require('gulp');
var coffee = require('gulp-coffee');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var env = gutil.env.env;

gulp.task('coffee', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(plumber({
        errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe( gulpif( env === 'development', sourcemaps.init({loadMaps: true})) )
    .pipe(coffee({bare: true}))
    .pipe( 
        gulpif(
            env === 'development', sourcemaps.write({
                includeContent:false
            })
        )
    ) 
    .on('error', function(err) {
        console.log(err)
    })      
    .pipe(concat('main.js'))
    .pipe( gulpif( env === 'production', uglify()))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(notify({ message: 'Coffee task complete' }))
});
