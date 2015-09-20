var gulp = require('gulp');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var notify = require('gulp-notify');
var env = gutil.env.env;

gulp.task('compass', function() {
    
    return  gulp.src('./src/sass/**/*.scss')
            .pipe(plumber({
                errorHandler: function (error) {
                        console.log(error.message);
                        this.emit('end');
                    }
                })
            )
            .pipe(compass({
                config_file: './config.rb',
                css: './dist/css',
                sass: './src/sass',
                httpImagesPath: '../images/',
                font: 'dist/fonts/',
                style: env === 'development' ? 'expanded' : 'compressed',
                sourcemap: env === 'development' ? true : false
            }))
            .on('error', function(err) {
                console.log(err)
            })
            .pipe( gulpif( env === 'development', sourcemaps.init({loadMaps: true})) )
            .pipe( 
                gulpif(
                    env === 'development', sourcemaps.write({
                        includeContent: false
                    })
                )
            )
            .pipe(notify({ message: 'Compass task complete!' }));
                     
});