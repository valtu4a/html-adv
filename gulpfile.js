// плагины
const gulp = require('gulp'),//система описания задач
    plumber = require('gulp-plumber'),//плагин обработки ошибок
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass')(require('node-sass')),//компиляция SCSS в CSS
    htmlmin = require('gulp-htmlmin'),//минимизация html
    browserSync = require('browser-sync'),//веб-сервер
    reload = browserSync.reload;//перегрузить страницу в браузере

// пути
const path = {
    build: {
        html: 'build/',
        scss: 'build/css/',
        js: 'build/js/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.{html,htm}',
        scss: 'src/scss/main.scss',
        js: ['src/js/libs.js', 'src/js/app.js'],
        img: 'src/img/**/*.{jpg,png,gif,svg,jpeg,webp}',
        fonts: 'src/fonts/**/*.{eot,ttf,woff,woff2,svg,otf}'
    },
    watch: {
        html: 'src/*.{html,htm}',
        scss: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.{jpg,png,gif,svg,jpeg,webp}',
        fonts: 'src/fonts/**/*.{eot,ttf,woff,woff2,svg,otf}'
    }
};
const config = {
    server: {
        baseDir: "./build",
        index:"index.html"
    },
    tunnel: true,
    host: 'localhost',
    port: 7787,
    logPrefix: "WebDev"
};

// задачи

// задача сборки html
gulp.task('build:html', function (done) {
    gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream:true}));
    done();
});

//задача компиляции scss в css
gulp.task('build:scss', function (done) {
    gulp.src(path.src.scss)
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.scss))
        .pipe(reload({stream:true}));
    done();
});

gulp.task('webserver', function (done) {
    browserSync(config);
    done();
});

gulp.task('watch', function (done) {
  gulp.watch(path.watch.html, gulp.series('build:html'));
  gulp.watch(path.watch.scss, gulp.series('build:scss'));
    done();
});

gulp.task('default', gulp.series(gulp.parallel('build:html','build:scss'),'watch','webserver'));
