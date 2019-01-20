var gulp     = require('gulp')
,   appData  = require('../util/application-data')
,   frontend = appData.paths.frontend;

gulp.task('watch', function(){
    gulp.watch(frontend.root + frontend.scss         + '/**/*.scss',                         ['scss-development'  ]);
    gulp.watch(frontend.root + frontend.markup.root  + '/**/*.nunj',                         ['markup']);
    // gulp.watch(frontend.root + frontend.fonts        + '/**/*.{eot,svg,ttf,woff,woff2,css}', ['fonts' ]);
    // gulp.watch(frontend.root + frontend.images       + '/**/*.{png,jpg,jpeg,gif,svg}',       ['images']);
    // gulp.watch(frontend.root + frontend.data         + '/**/*.json',                         ['data', 'markup']);
    // gulp.watch(frontend.root + frontend.video        + '/**/*.{mp4,ogg}',                    ['video']);
});

// var gulp     = require('gulp')
// ,   watch    = require('gulp-watch')
// ,   appData  = require('../util/application-data')
// ,   frontend = appData.paths.frontend;

// gulp.task('watch', function(){
//     watch(frontend.root + frontend.scss         + '/**/*.scss',                         () => { gulp.start('scss-development') });
//     watch(frontend.root + frontend.markup.root  + '/**/*.nunj',                         () => { gulp.start('markup') });
//     watch(frontend.root + frontend.fonts        + '/**/*.{eot,svg,ttf,woff,woff2,css}', () => { gulp.start('fonts' ) });
//     watch(frontend.root + frontend.images       + '/**/*.{png,jpg,jpeg,gif,svg}',       () => { gulp.start('images') });
//     watch(frontend.root + frontend.images       + '/',                                  () => { gulp.start('images') });
//     watch(frontend.root + frontend.data         + '/**/*.json',                         () => { gulp.start(['data', 'markup']) });
//     watch(frontend.root + frontend.video        + '/**/*.{mp4,ogg}',                    () => { gulp.start('video') });
// });