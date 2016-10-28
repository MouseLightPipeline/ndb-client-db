var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var tslint = require("gulp-tslint");
var concat = require('gulp-concat');
var ts = require("gulp-typescript");
var typings = require("gulp-typings");
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');

gulp.task('default', ['watch']);

gulp.task('build', ['clean', 'tslint', 'ts']);

gulp.task('watch', ['clean', 'build'], () => {
    return gulp.watch(['src/**/*.ts', 'gulpfile.js'], ['build']);
});

gulp.task('clean', () => {
    return del(['dist/**/*', 'src/**/*.js', 'src/**/*.js.map', 'src/**/*.d.ts']);
});

gulp.task("tslint", () => {
    var tslintConfig = require('./tslint.json');

    return gulp.src('client/**/*.ts').pipe(tslint({configuration: tslintConfig}))
        .pipe(tslint.report("verbose", {emitError: false}))
});

gulp.task("typings", ['clean'], () => {
    return gulp.src("./typings.json").pipe(typings());
});

gulp.task('ts', ['typings'], () => {
    var tsProject = ts.createProject('./tsconfig.json');

    var tsResult = tsProject.src().pipe(sourcemaps.init()).pipe(tsProject());

    return merge([tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('dist')), tsResult.dts.pipe(concat('index.d.ts')).pipe(gulp.dest('dist/@types'))]);
});
