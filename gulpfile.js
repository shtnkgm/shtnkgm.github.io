var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('compile-css', function () {
    return gulp.src(['./css/*.css'])
        .pipe(autoprefixer({
            browsers: ["last 3 versions", "ie >= 9", "Android >= 4","ios_saf >= 8"],
            cascade: false
        }))
        .pipe(gulp.dest('./css/gulp'));
});