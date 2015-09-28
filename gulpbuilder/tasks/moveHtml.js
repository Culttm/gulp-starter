var config    = require('../configuration/config');
if(!config.tasks.move.html) return

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var path = require('path'); 

var paths = {
  src: path.join(config.root.src, config.tasks.move.html.folder, '**/*.html'),
  dest: path.join(config.root.dest, config.tasks.move.html.folder)
}


gulp.task('moveHtml', function() {
 
    return  gulp.src(paths.src)
            .pipe(plumber({
                errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
            .pipe(changed(paths.dest))
            .pipe(gulp.dest(paths.dest));
});