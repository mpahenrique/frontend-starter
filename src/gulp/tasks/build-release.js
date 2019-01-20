var gulp = require('gulp');

gulp.task('build-release', [
    'data',
    'video',
    'pdf',
    'fonts',
    'images',
    'js-release',
    'markup',
    'scss-release'
]);