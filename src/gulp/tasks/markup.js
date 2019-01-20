const gulp           = require('gulp')
,     nunjucksRender = require('gulp-nunjucks-render')
,     appData        = require('../util/application-data')
,     plumber        = require('gulp-plumber')
,     gulpTap        = require('gulp-tap')
,     gulpData       = require('gulp-data')
,     rename         = require('gulp-rename')
,     htmlmin        = require('gulp-htmlmin')
,     fs             = require('fs')
,     through        = require('through2')
,     frontend       = appData.paths.frontend
,     build          = appData.paths.build
,     pages          = recursiveRequire('./app' + frontend.data)

var buildView = () => {

    var readyPaths = []
    ,   i = 0
    
    for(var page in pages){
        if(!pages[page].id) continue
        readyPaths.push(frontend.root + frontend.markup.root + frontend.markup.views)
    }
 
    var pageKeys = Object.keys(pages)
    ,   index    = 0

    compileCurrent(readyPaths[i]).then(check).catch(err)
    
    function check(){
        i++
        if(i < readyPaths.length) {
            compileCurrent(readyPaths[i]).then(check).catch(err)
        }
    }

    function compileCurrent(filePath) { return new Promise(function(res, rej){
        var pageName = pages[pageKeys[i]].id
        gulp.src(filePath + '/core.nunj')
            .pipe(plumber({
                handleError: (err) => {
                    rej(err)
                    this.emit('end');
                }
            }))
            .pipe(gulpData(function(file){
                return pages[pageKeys[i]]
            }))
            .pipe(nunjucksRender({
                ext : ".html",
            }))
            .pipe(rename({basename:pageName}))
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest(build.root + build.markup.root))
            .pipe(through.obj(res))
        })
    }


    gulp.src(frontend.root + frontend.markup.root + frontend.markup.templates + '/**/*.nunj')
        .pipe(plumber({
            handleError: (err) => {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest(build.root + build.markup.templates));
}

function err(error) {
    console.error(error)
}

function recursiveRequire(path){
    /***************** Dependencies *****************/
    const fs        = require('fs')
    ,     _         = require('underscore')
    var target      = {};
    /************************************************/

    if(!fs.existsSync(path)) return;
    fs.readdirSync(path).forEach(function(file) {
        if(fs.lstatSync(path + '/' + file).isDirectory()){
            if(!target[file]) target[file] = {};
            return _.extend(target[file], recursiveRequire(path + '/' + file));
        }
        if(!file.match('.json', '')){
            var name = file.replace('.js', '');
        } else {
            var name = file;
        }
        if(target[name]){
            target[name][name] = require('../.' + path + '/' + file);
        } else {
            target[name] = require('../.' + path + '/' + file);
        }
    });

    return target;
}

gulp.task('markup', () => {
    var folders = fs.readdirSync('./app' + frontend.data);
    buildView();
});