var gulp = require('gulp');

gulp.task('build', [
    'data',
    'video',
    'pdf',
    'fonts',
    'images',
    'js-development',
    'markup',
    'scss-development',
    'browser-sync'
]);