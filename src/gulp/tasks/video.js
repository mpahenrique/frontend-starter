var gulp     = require('gulp')
,   appData  = require('../util/application-data')
,   frontend = appData.paths.frontend
,   build    = appData.paths.build;

gulp.task('video',function(){
    gulp.src([frontend.root + frontend.video + '/**/*'])
        .pipe(gulp.dest(build.root + build.video));
});