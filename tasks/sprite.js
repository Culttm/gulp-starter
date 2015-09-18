var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./src/images/sp/*.*') // source path of the sprite images
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprites.scss',
                cssFormat : 'scss',
                algorithm: 'binary-tree',
                imgPath: '../images/sprite.png'
            }));

    spriteData.img.pipe(gulp.dest('./dist/images/')); // output path for the sprite
    spriteData.css.pipe(gulp.dest('./src/sass/')); // output path for the CSS
});