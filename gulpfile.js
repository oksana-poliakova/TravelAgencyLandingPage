const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify'); // Добавьте это

// Путь к SCSS и CSS файлам
const paths = {
    scss: 'src/scss/**/*.scss',
    css: 'public/css/'
};

// Задача для компиляции SCSS в CSS
gulp.task('sass', function() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.css)); // Убедитесь, что выходной путь указывает на public/css
});

// Задача для минификации JavaScript (если используется)
gulp.task('uglify', function() {
    return gulp.src('src/js/**/*.js') // Убедитесь, что путь правильный
        .pipe(uglify())
        .pipe(gulp.dest('public/js')); // Убедитесь, что выходной путь правильный
});

// Задача для наблюдения за изменениями в SCSS и JS файлах
gulp.task('watch', function() {
    gulp.watch(paths.scss, gulp.series('sass'));
    gulp.watch('src/js/**/*.js', gulp.series('uglify')); // Добавьте это
});

// Задача по умолчанию
gulp.task('default', gulp.series('sass', 'uglify', 'watch')); // Обновите это
