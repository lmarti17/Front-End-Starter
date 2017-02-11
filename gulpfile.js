require('shelljs/global');

const gulp = require('gulp'); // gulp
const concat = require('gulp-concat'); // Concatenate multiple files in one
const sass = require('gulp-sass'); // Sass compilation handler
const watch = require('gulp-watch'); // Watch files changments
const plumber = require('gulp-plumber'); // Allow gulp to complete tasks even if errors pops
const csso = require('gulp-csso'); // Minify the css
const jsmin = require('gulp-jsmin'); // Minify the js
const babel = require('gulp-babel'); // Minify the js
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const autoprefixer = require('gulp-autoprefixer'); // Add autoprefixer for css properties
const prettify = require('gulp-html-prettify'); // Render pretty html according to options

///////////
// Tasks
///////////
// Default build
gulp.task('build', ['utils', 'templates', 'sass', 'js_app', 'js_libs']);

// Watch changments
gulp.task('default', ['build'], function() {

  gulp.watch( 'src/js/**/*.js', ['js_app']);

  gulp.watch( 'src/sass/**/*.scss', ['sass']);

  gulp.watch( 'src/templates/**/*.html', ['templates']);

});


//////////////
// Templates
/////////////
gulp.task('templates', function() {
  gulp.src('./src/templates/**/*.html')
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./dist/'))
});



///////////
// Sass
///////////

gulp.task('sass', function(){
  return gulp.src( './src/sass/**/*.scss' )
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(sass({
          indentedSyntax: false
        }))
        .pipe(autoprefixer({
    			browsers: ['last 3 versions'],
    			cascade: false
    		}))
        .pipe(concat('app.css'))
        .pipe(csso())
        .pipe(gulp.dest( './dist/stylesheets/' ))
});



//////////////
// Javascript
//////////////

gulp.task('js_app', function(){

	return browserify('./src/js/app/app.js')
		.transform('babelify', { presets: ['es2015', 'stage-2'] })
		.bundle()
		.pipe(plumber({
			errorHandler: function(error) {
				console.log(error.message);
				this.emit('end');
			},
		}))
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist/scripts/'));
});


gulp.task('js_libs', function(){

  // return gulp.src('src/js/vendors/*.js')
  //       .pipe(plumber({
  //         errorHandler: function (error) {
  //           console.log(error.message);
  //           this.emit('end');
  //       }}))
  //       .pipe(concat("libs.js"))
  //       .pipe(jsmin())
  //       .pipe(gulp.dest('./dist/scripts/'))
  // cp('-R', './src/js/vendors/*', './dist/scripts/');
});

//////////////
// Utils
//////////////

gulp.task('utils', function(){

  rm('-rf', './dist');
  mkdir('./dist', './dist/assets', './dist/scripts');
  cp('-Rf', './src/assets', './dist/');
  cp('-R', './src/js/vendors/*', './dist/scripts/');
});
