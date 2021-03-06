
// const connect = require('gulp-connect');
// const browserSync = require('browser-sync').get('BrowserSync Server');

module.exports = function (gulp) {
  gulp.task('watch', () => {
    gulp.watch(['src/**/*.js'], ['build:js']);
    gulp.watch(['src/**/*.svg'], ['svgstore']);
    gulp.watch(['src/html/**/*'], ['build:html']);
    gulp.watch(['src/**/*.scss'], ['build:css-patternlab']);
  });

  gulp.task('watch:prod', () => {
    gulp.watch(['src/**/*.svg'], ['svgstore']);
    gulp.watch(['src/**/*.js'], ['build:js-prod']);
    gulp.watch(['src/html/**/*'], ['build:html']);
    gulp.watch(['src/**/*.scss'], ['build:css-patternlab']);
  });
};
