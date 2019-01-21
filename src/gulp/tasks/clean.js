var gulp     = require('gulp')
,		clean    = require('gulp-clean')
,   appData  = require('../util/application-data')
,   build    = appData.paths.build
 
gulp.task('clean', function () {
    return gulp.src(build.root, { force: true, read: false })
        .pipe(clean());
});