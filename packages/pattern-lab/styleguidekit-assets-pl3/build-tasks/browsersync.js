'use strict';

const connect = require('gulp-connect');


module.exports = function (gulp) {
  gulp.task('browsersync', function(){

    connect.server({
      root: '/',
      port: 3000,
      livereload: true
    });
  });
};
