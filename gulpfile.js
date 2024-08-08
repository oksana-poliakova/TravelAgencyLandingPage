const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify'); 

const paths = {
    scss: 'src/scss/**/*.scss',
    css: 'public/css/'
};

gulp.task('sass', function() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.css)); 
});

gulp.task('uglify', function() {
    return gulp.src('src/js/**/*.js') 
        .pipe(uglify())
        .pipe(gulp.dest('public/js')); 
});

gulp.task('watch', function() {
    gulp.watch(paths.scss, gulp.series('sass'));
    gulp.watch('src/js/**/*.js', gulp.series('uglify')); 
});

gulp.task('default', gulp.series('sass', 'uglify', 'watch')); 