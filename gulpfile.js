var gulp = require('gulp');


var rjs = require('gulp-requirejs-optimize');



gulp.task('rjs', function(){
    gulp.src('src/home/main-*.js')
    .pipe(rjs({
        baseUrl:'./src',
        name:'home/main-index',
        paths:{
            jquery:'lib/jquery',
            add:'home/add',
            template:'lib/arttemplate'
        }
    }))
    .pipe(gulp.dest('dist'))
})

