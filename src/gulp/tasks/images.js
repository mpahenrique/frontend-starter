var gulp     = require('gulp')
,   imagemin = require('gulp-imagemin')
,   appData  = require('../util/application-data')
,   frontend = appData.paths.frontend
,   build    = appData.paths.build

gulp.task('images', () => {    
    gulp.src([frontend.root + frontend.imagesDesktop + '/**/*.{png,jpg,gif,svg,ico}'])
        // .pipe(imagemin())
        .pipe(gulp.dest(build.root + build.imagesDesktop));

    gulp.src([frontend.root + frontend.imagesMobile + '/**/*.{png,jpg,gif,svg,ico}'])
        // .pipe(imagemin())
        .pipe(gulp.dest(build.root + build.imagesMobile));
});