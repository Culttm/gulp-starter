var gulp = require("gulp");
var browserSync = require('browser-sync');
var path   = require('path')
var watch  = require('gulp-watch')


gulp.task('watch', function () {
	watch('./src/images/**/*', function(){
		gulp.start('moveImages')
	});

	watch('./src/assets/**/*', function(){
		gulp.start('moveAssets')
	});

	watch('./src/fonts/**/*', function(){
		gulp.start('moveFonts')
	});

	watch('./src/coffee/**/*.coffee', function(){
		gulp.start('coffee')
	});

	watch('./src/**/*.html', function(){
		gulp.start('moveHtml')
	});

	watch('./src/sass/**/*.scss', function(){
		gulp.start('compass')
	});
});