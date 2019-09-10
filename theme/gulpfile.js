"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cleancss = require("gulp-clean-css");
const csscomb = require("gulp-csscomb");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

gulp.task("default", function () {
	return gulp.src("./*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({ precision: 10 }).on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(csscomb())
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("./dist"))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(cleancss())
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch", function () {
	gulp.watch("./*.scss", gulp.series("default"));
});

