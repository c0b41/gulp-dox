var gulp = require('gulp'),
    	dox = require('./index.js');

gulp.task('default', function() {
  return gulp.src('./a.js')
        .pipe(dox())
        .pipe(gulp.dest('build/'));;
});
