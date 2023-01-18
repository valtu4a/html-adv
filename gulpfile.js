// плагины
const gulp = require('gulp'),//система описания задач
    plumber = require('gulp-plumber'),//плагин обработки ошибок
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass')(require('node-sass')),//компиляция SCSS в CSS
    htmlmin = require('gulp-htmlmin'),//минимизация html
    browserSync = require('browser-sync'),//веб-сервер
    rigger = require('gulp-rigger'),//собрать в одном файле скрипты
    terser = require('gulp-terser'),//минимизировать код
    reload = browserSync.reload,//перегрузить страницу в браузере
    rimraf = require('rimraf');//плагин удаления файлов
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
        js: ['src/js/libs.js', 'src/js/app.js', 'src/js/maps/ymaps.js'],
        img: 'src/img/**/*.{jpg,png,gif,svg,jpeg,webp}',
        fonts: 'src/fonts/**/*.{eot,ttf,woff,woff2,svg,otf}'
    },
    watch: {
        html: 'src/*.{html,htm}',
        scss: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.{jpg,png,gif,svg,jpeg,webp}',
        fonts: 'src/fonts/**/*.{eot,ttf,woff,woff2,svg,otf}'
    },
    clean: 'build/'
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

gulp.task('clean', function(done){
    rimraf(path.clean,done);
});
// задача сборки html
gulp.task('build:html', function (done) {
    gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream:true}));
    done();
});

// задача копирования шрифтов
gulp.task('mv:fonts', function (done) {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({stream:true}));
    done();
});

gulp.task('mv:img', function (done) {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream:true}));
    done();
});

gulp.task('build:js', function (done) {
    gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(terser())
        .pipe(gulp.dest(path.build.js))
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

gulp.task('dev:scss', function (done) {
    gulp.src(path.src.scss, {sourcemaps:true} )
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded',
            sourcemaps: true,
        }))
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.scss, {sourcemaps:'.'}))
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
  gulp.watch(path.watch.fonts, gulp.series('mv:fonts'));
  gulp.watch(path.watch.js, gulp.series('build:js'));
  gulp.watch(path.watch.js, gulp.series('mv:img'));
  done();
});

gulp.task('default', gulp.series('clean', gulp.parallel('build:html','dev:scss','build:js','mv:fonts','mv:img'),'watch','webserver'));
