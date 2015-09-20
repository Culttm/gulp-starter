var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(){
		runSequence(
			[
			    'bower',
			    'moveFonts',
			    'moveAssets',
			    'moveImages',
			    'moveHtml'
			],
		    'sprite',
		    'cleanCss',
		    'compass',
		    'server',
		    'watch'
	    )
	}
);