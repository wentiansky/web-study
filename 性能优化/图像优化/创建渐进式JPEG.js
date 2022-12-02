// 在node.js环境下才能执行
// 通过gulp创建渐进式的JPEG
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
// 引入MozJPEG依赖包
const imageminMozJPEG = require('imagemin-mozjpeg')
// 引入Guetzli依赖包
const imageminGuetzli = require('imagemin-guetzli')

gulp.task('images', () =>
  gulp.src('images/*.jpg')
  .pipe(imagemin({ progressive: true }))
  .pipe(gulp.dest('dist'))
)

// MozJPEG压缩编码
gulp.task('mozjpeg', () =>
  gulp.src('image/*.jpg')
  .pipe(imagemin([imageminMozJPEG({ quality: 85 })]))
  .pipe(gulp.dest('dist'))
)

// Guetzli压缩编码
gulp.task('guetzli', () =>
  gulp.src('image/*.jpg')
  .pipe(imagemin([imageminMozJPEG({ quality: 85 })]))
  .pipe(gulp.dest('dist'))
)