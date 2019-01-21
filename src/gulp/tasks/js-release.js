var gulp       = require('gulp')
,   plumber    = require('gulp-plumber')
,   sourcemaps = require('gulp-sourcemaps')
,   appData    = require('../util/application-data')
,   frontend   = appData.paths.frontend
,   build      = appData.paths.build
,   source     = require('vinyl-source-stream')
,   buffer     = require('vinyl-buffer')
,   browserify = require('browserify')
,   watchify   = require('watchify')
,   stringify  = require('stringify')
,   uglify     = require('gulp-uglify-es').default
,   minify     = require('gulp-minify')

gulp.task('js-release', () => {
    var b = browserify({
        cache: {},
        packageCache: {},
        fullPaths: false
    }).transform(stringify, {
      appliesTo: { includeExtensions: ['.nunj'] }
    });
    b.add(frontend.root + frontend.js + '/index.js');
    bundleShare(b);
});

function bundleShare(b) {
  b.bundle()
    .on('error', (err) => {
        console.log(err.toString());
    })
    .pipe(source('index.js'))
    .pipe(plumber({
        handleError: (err) => {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest(build.root + build.js));
}