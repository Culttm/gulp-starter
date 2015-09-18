var gulp = require('gulp');

gulp.task('default', [
    'moveHtml',
    'cleanCss',
    'moveFonts',
    'moveAssets',
    'moveImages',
    'compass',
    'bower',
    'server',
    'watch'
]);