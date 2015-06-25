
///////////
///Required/////
///////////

var gulp = require('gulp'),
uglify = require('gulp-uglify')
plumber = require('gulp-plumber')
livereload = require('gulp-livereload'),
imagemin = require('gulp-imagemin');
///////////
///Scripts Task/////
///////////Uglifies
gulp.task('scripts', function(){
	gulp.src('*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});


////Watch Task
/// Watches JS
gulp.task('watch', function() {

var server =livereload();

gulp.watch('*.js', ['scripts']);
});

//Image Task
//Compress
gulp.task('image', function(){
	gulp.src('images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/images'));
});

gulp.task ('default', ['scripts', 'watch']);