var gulp 			= require('gulp');
var concat 		= require('gulp-concat');
var sass  		= require('gulp-sass');
var watch  		= require('gulp-watch');
var plumber 	= require('gulp-plumber');
var csso      = require('gulp-csso');
var jsmin     = require('gulp-jsmin');


// Default build
gulp.task('build', ['sass','js_app', 'js_libs']);

// Build for prod with minifying css and js
gulp.task('buildProd',['build','minify_css','minify_js']);

// Watch changments
gulp.task('default', ['build'], function() {

  gulp.watch( 'js/app/*.js', ['js_app']);

  gulp.watch( 'sass/**/*.scss', ['sass']);

  gulp.watch( 'js/vendor/*.js', ['js_libs']);

});

// App
gulp.task('js_app', function(){

  return gulp.src('js/app/*.js')
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(concat("app.js"))
        .pipe(gulp.dest('js/dist/'))
});

// Sass
gulp.task('sass', function(){
  return gulp.src( 'sass/**/*.scss' )
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(sass({
          indentedSyntax: false
        }))
        .pipe(gulp.dest( 'stylesheets/' ))
});

// Vendors
gulp.task('js_libs', function() {

  return gulp.src('js/vendor/*.js')
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest('js/dist/'))

});
// Minifying function
// Minify css
gulp.task('minify_css', function () {
    return gulp.src('stylesheets/app.css')
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(csso())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('stylesheets/'));
});

// Minify js
gulp.task('minify_js', function () {
	gulp.src(['js/vendor/vendor.js','js/dist/app.js'])
		.pipe(jsmin())
    .pipe(concat('app.min.js'))
		.pipe(gulp.dest('js/dist/'));
});
