const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify'); 
const concat = require('gulp-concat');
// Including HTML files
const fileInclude = require('gulp-file-include');


const paths = {
    scss: 'src/scss/**/*.scss',
    css: 'public/css/',
    js: 'src/js/**/*.js',
    jsDest: 'public/js/'
};

gulp.task('sass', function() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.css)); 
});

gulp.task('uglify', function() {
    return gulp.src(paths.js) 
        .pipe(concat('bundle.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest(paths.jsDest)); 
});

gulp.task('html', function() {
    return gulp.src(['src/*.html']) 
      .pipe(fileInclude({
        prefix: '@@', 
        basepath: '@file' 
      }))
      .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', gulp.series('html'));
    gulp.watch(paths.scss, gulp.series('sass'));
    gulp.watch(paths.js, gulp.series('uglify')); 
});

gulp.task('default', gulp.series('sass', 'uglify', 'html', 'watch')); 