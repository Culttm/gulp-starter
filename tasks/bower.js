var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var bower = require('gulp-bower');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var fs    = require('fs'); 

gulp.task('bower', function() {
    

  var jsFilter = gulpFilter('**/*.js',  {restore: true});
  var cssFilter = gulpFilter('**/*.css',  {restore: true});

      // bower();

      if (fs.existsSync('vendors')) { 
          gulp.src(bowerFiles())
              .pipe(jsFilter)
              .pipe(concat('libs.js'))
              .pipe(gulp.dest('./dist/js'))

          gulp.src(bowerFiles())
              .pipe(cssFilter)
              .pipe(concat('libs.css'))
              .pipe(gulp.dest('./dist/css'))
              // .pipe(cssFilter.restore())  
      } 

});
