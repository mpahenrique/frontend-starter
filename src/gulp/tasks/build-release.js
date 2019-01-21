var gulp = require('gulp');

gulp.task('build-release', [
		'clean',
    'data',
    'video',
    'pdf',
    'fonts',
    'images',
    'js-release',
    'markup',
    'scss-release'
]);