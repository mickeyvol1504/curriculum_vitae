'use strict';

var gulp = require('gulp');
var debug  = require('gulp-debug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var gulpIf = require('gulp-if');
var del = require('del');
var newer = require('gulp-newer');
var browserSync = require('browser-sync').create();

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('sass', function(){
	return gulp.src('frontend/sass/main.scss')
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({browsers: ['last 20 versions', '> 1%', 'Firefox > 20', 'ie 8']}))
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('public/css'));
});

gulp.task('clean', function(){
	return del('public');
});

gulp.task('assets', function(){
	return gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')})
		.pipe(newer('public'))
		.pipe(debug({title: 'assets'}))
		.pipe(gulp.dest('public'));
});

gulp.task('js', function(){
	return gulp.src('frontend/js/**/*.*')
		.pipe(debug({title: 'js'}))
		.pipe(gulp.dest('public/js'));
});

gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('sass', 'js', 'assets'))
);

gulp.task('watch', function(){
	gulp.watch('frontend/sass/**/*.*', gulp.series('sass'));
	gulp.watch('frontend/js/**/*.*', gulp.series('js'));
	gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});

gulp.task('serve', function(){
	browserSync.init({
		server: 'public'
	});
	browserSync.watch('public/**/*.*').on('change', browserSync.reload)
});

gulp.task('default',
	gulp.series('build', gulp.parallel('watch', 'serve')));
