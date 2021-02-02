'use strict';

var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var csso = require('gulp-csso');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify-es').default;

const directories = ['.', 'about_me', 'gallery'];

// Gulp task to minify CSS files
function styles(cb) {
  directories.forEach((dir) => {
    gulp.src(`${dir}/css/*.css`)
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer())
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest(`dist/${dir}/css`));
  });
  cb();
}

// Gulp task to minify JavaScript files
function scripts(cb) {
  directories.forEach((dir) => {
    gulp.src(`${dir}/scripts/*.js`)
        // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest(`dist/${dir}/scripts`));
  });
  cb();
}

// Gulp task to minify HTML files
function pages(cb) {
  directories.forEach((dir) => {
    gulp.src(`${dir}/index.html`)
        .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
        }))
        .pipe(gulp.dest(`dist/${dir}/`));
  });
  cb();
}

function assets(cb) {
  directories.forEach((dir) => {
    gulp.src(`${dir}/assets/*`)
        .pipe(gulp.dest(`dist/${dir}/assets`));
  });
  cb();
}

// Clean output directory
function clean(cb) {
  del(['dist']);
  cb();
}

// Gulp task to minify all files
exports.clean = clean;
exports.build = gulp.series(clean, assets, styles, scripts, pages);
exports.default = gulp.series(clean, assets, styles, scripts, pages);