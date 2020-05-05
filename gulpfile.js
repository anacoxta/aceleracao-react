var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/components/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('src/components'))
});

gulp.task('dev', function () {
  gulp.watch('src/components/**/*.scss', gulp.series('sass'));
});
