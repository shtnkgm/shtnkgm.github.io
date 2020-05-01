var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// Task
gulp.task('default', function () {
    return gulp.src(['./css/*.css'])
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/gulp'));
});