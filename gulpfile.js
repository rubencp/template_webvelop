// Include gulp
var gulp           = require('gulp');
var injectPartials = require('gulp-inject-partials');
var browserSync    = require('browser-sync').create();
var convertEncoding = require('gulp-convert-encoding');

function merge_partials(){
      return gulp.src('./src/index.html')
           .pipe(injectPartials())
           .pipe(convertEncoding({to: 'iso-8859-15'}))
           .pipe(gulp.dest('./'));
}

// Start a server with LiveReload to preview the site in
function server(done) {
  browserSync.init({
    server: './'
  });
  done();
}

// Watch for file changes
function watch() {
  gulp.watch(['src/**/*.html', 'src/partials/**/*', 'css/*.css']).on('change', gulp.series(merge_partials, browserSync.reload));
}

gulp.task('server',
  gulp.series(server, watch));

gulp.task('build', merge_partials );












// Include Our Plugins
//var jshint = require('gulp-jshint');
/*
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
*/

// Lint Task
/*
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
*/

// Concatenate & Minify JS
/*
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
*/

// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
//gulp.task('default', [ server , watch ] );



