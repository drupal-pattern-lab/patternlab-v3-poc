'use strict';

const gulp = require('gulp');
// Default config at `node_modules/@theme-tools/plugin-sass/config.default.js`
const cssTasks = require('@theme-tools/plugin-sass')({
  src: [
    'source/_styles/**/*.scss'
  ],
  dest: 'public/styles',
  lint: {
    enabled: false
  }
});
// Default config at `node_modules/@theme-tools/plugin-browser-sync/config.default.js`
const browserSyncTasks = require('@theme-tools/plugin-browser-sync')({
  baseDir: 'public',
  startPath: '/',
  port: 3000
});
// Default config at `node_modules/@theme-tools/plugin-pattern-lab-php/config.default.js`
const patternLabTasks = require('./packages/theme-tools/packages/plugin-pattern-lab-php')({
  configFile: 'config/config.yml',
  plRoot: '../../packages/pattern-lab',
  plCommand: 'console/console',
  sourceRoot: './'
});

const jsTasks = require('@theme-tools/plugin-js-concat-babel')({
  src: [
    'js/**/*.js'
  ],
  dest: 'assets',
  babelConfig: {
    presets: ['babel-preset-es2015'].map(require.resolve)
  }
});

// gulp.task('validate:js', jsTasks.validate);
// gulp.task('js', jsTasks.compile);
// gulp.task('fix:js', jsTasks.fix);
// gulp.task('clean:js', jsTasks.clean);
// gulp.task('watch:js', jsTasks.watch);

gulp.task('css', cssTasks.compile);
gulp.task('pl', patternLabTasks.compile);

gulp.task('compile', gulp.series([
  cssTasks.clean,
  jsTasks.clean,
  gulp.parallel([
    // 'js',
    'css',
    'pl'
  ])
]));

gulp.task('default', gulp.series([
  'compile',
  gulp.parallel([
    patternLabTasks.watch,
    cssTasks.watch,
    // jsTasks.watch,
    browserSyncTasks.serve
  ])
]));
