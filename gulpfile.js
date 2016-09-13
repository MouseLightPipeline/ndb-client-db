var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var ts = require("gulp-typescript");
var gulpTypings = require("gulp-typings");
var tslint = require("gulp-tslint");
var merge = require('merge2');
var concat = require('gulp-concat');

gulp.task('default', ['watch']);

gulp.task('build', ['tslint', 'ts']);

gulp.task('deploy', ['ts']);

gulp.task('watch', ['build'], () => {
    return gulp.watch(['client/**/*.ts', 'gulpfile.js'], ['build']);
});

gulp.task('clean', function () {
    return del(['dist/**/*', 'client/**/*.js', 'client/**/*.js.map', 'client/**/*.d.ts']);
});

gulp.task("typings", ['clean'], () => {
    return gulp.src("./typings.json").pipe(gulpTypings());
});

gulp.task("tslint", () => {
    var tslintConfig = require('./tslint.json');

    return gulp.src('client/**/*.ts').pipe(tslint({configuration: tslintConfig}))
        .pipe(tslint.report("verbose", {emitError: false}))
});

gulp.task('ts', ['typings'], () => {
    var tsConfig = require('./tsconfig.json');

    var tsResult = gulp.src(['client/**/*.ts', 'typings/**/*.d.ts']).pipe(ts(tsConfig.compilerOptions));

    return merge([tsResult.js.pipe(gulp.dest('dist')), tsResult.dts.pipe(concat('ndb-client-db.d.ts')).pipe(gulp.dest('dist'))]);
});
