// Include gulp
var gulp = require('gulp');

// Include Our Plugins
//var jshint = require('gulp-jshint');
/*
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
*/

var injectPartials = require('gulp-inject-partials');

var browserSync = require('browser-sync').create();



gulp.task('merge_index', merge_partials );


function merge_partials(){
      return gulp.src('./src/index.html')
           .pipe(injectPartials())
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
  gulp.watch(['src/**/*.html', 'src/partials/**/*']).on('change', gulp.series(merge_partials, browserSync.reload));
}

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("*.html").on("change", merge_index);
});

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

// Watch Files For Changes
gulp.task('watch', function() {
   //gulp.watch('src/pages/**/*.html').on('change', gulp.series(browser.reload));
   gulp.watch('*.html').on('change', browserSync.reload);
   // gulp.watch('js/*.js', ['lint', 'scripts']);
   // gulp.watch('scss/*.scss', ['sass']);

});

// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
//gulp.task('default', [ server , watch ] );

gulp.task('server_task',
  gulp.series(server, watch));

