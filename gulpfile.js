var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    sourceMap = require('gulp-sourcemaps')

var bowerSrc = 'bower_components/';

gulp.task('html', function() {
  gulp.src('*.html')
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload());
})

gulp.task('copy', function() {

})

gulp.task('js', function() {
  gulp.src('script/script.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/script'))
      .pipe(connect.reload());
})

gulp.task('less', function() {
  gulp.src('less/index.less')
      .pipe(sourceMap.init())
      .pipe(less())
      .pipe(sourceMap.write())
      .pipe(gulp.dest('dist/css/'))
      .pipe(connect.reload());
})

gulp.task('image', function() {
  gulp.src('img/*.{png,jpg,gif,ico}')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
      .pipe(connect.reload());
})

gulp.task('watch', function(){
  gulp.watch('*.html', ['html']);
  gulp.watch('script/*.js', ['js']);
  gulp.watch('less/*.less', ['less']);
  gulp.watch('img/*.{png,jpg,gif,ico}');
})

gulp.task('connect', function(){
  connect.server({
    livereload:true,
    root: 'dist'
  })
})

gulp.task('default', ['html', 'js', 'image', 'watch', 'connect', 'copy']);
