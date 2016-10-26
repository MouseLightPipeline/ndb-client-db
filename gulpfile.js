var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var tslint = require("gulp-tslint");
var concat = require('gulp-concat');

gulp.task('default', ['watch']);

gulp.task('build', ['clean', 'tslint', 'ts']);

gulp.task('watch', ['clean', 'build'], () => {
    return gulp.watch(['client/**/*.ts', 'gulpfile.js'], ['build']);
});

gulp.task('clean', () => {
    return del(['dist/**/*', 'client/**/*.js', 'client/**/*.js.map', 'client/**/*.d.ts']);
});

gulp.task("tslint", () => {
    var tslintConfig = require('./tslint.json');

    return gulp.src('client/**/*.ts').pipe(tslint({configuration: tslintConfig}))
        .pipe(tslint.report("verbose", {emitError: false}))
});
