const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const tslint = require("gulp-tslint");
const concat = require('gulp-concat');
const ts = require("gulp-typescript");
const typings = require("gulp-typings");
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');

gulp.task('default', ['watch']);

gulp.task('build', ['clean', 'tslint', 'ts']);

gulp.task('watch', ['clean', 'build'], () => {
    return gulp.watch(['src/**/*.ts', 'gulpfile.js'], ['build']);
});

gulp.task('clean', () => {
    return del(['dist/**/*', 'src/**/*.js', 'src/**/*.js.map', 'src/**/*.d.ts']);
});

gulp.task("tslint", () => {
    const tslintConfig = require('./tslint.json');

    return gulp.src('client/**/*.ts').pipe(tslint({configuration: tslintConfig}))
        .pipe(tslint.report("verbose", {emitError: false}))
});

gulp.task("typings", ['clean'], () => {
    return gulp.src("./typings.json").pipe(typings());
});

gulp.task('ts', ['typings'], () => {
    const tsProject = ts.createProject('./tsconfig.json');

    const tsResult = tsProject.src().pipe(sourcemaps.init()).pipe(tsProject());

    return merge([tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('dist')), tsResult.dts.pipe(concat('index.d.ts')).pipe(gulp.dest('dist/@types'))]);
});
