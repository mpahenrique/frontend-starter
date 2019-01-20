var gulp     = require('gulp')
,   appData  = require('../util/application-data')
,   frontend = appData.paths.frontend
,   build    = appData.paths.build;

gulp.task('pdf',function(){
    gulp.src([frontend.root + frontend.pdf + '/**/*'])
        .pipe(gulp.dest(build.root + build.pdf));
});