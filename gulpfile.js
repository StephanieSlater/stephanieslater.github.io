const gulp = require('gulp');

const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

gulp.task('html', () => {
  return gulp.src('./src/pages/*.hbs')
    .pipe(handlebars({}, {
      ignorePartials: true,
      batch: ['./src/partials']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('default', ['html']);