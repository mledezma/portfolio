const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
			browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
});

gulp.task('pug', function(){
    return gulp.src('app/*.pug') // Gets all files ending with .pug in app/scss
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream()) 
}); 

gulp.task('watch', ['sass', 'pug'], function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });

    gulp.watch('app/sass/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('app/js/**/*.js', ['js', browserSync.reload]);
    gulp.watch('app/**/*.pug', ['pug']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('app/img/**/*.+(png|jpg|jpeg|gif|svg)', ['images', browserSync.reload])
});

gulp.task('js', function(){
    return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('./js'))
});

gulp.task('images', function () {
    return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(gulp.dest('./img'))
});

gulp.task('build', ['sass', 'images', 'pug', 'js', 'watch']);