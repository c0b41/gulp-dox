var gulp = require('gulp'),
    	dox = require('./index.js');

gulp.task('default', function() {
  return gulp.src('./test/fixtures/hello.js')
        .pipe(dox())
        .pipe(gulp.dest('./test/expected/'));;
});
