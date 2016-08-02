var gulp = require('gulp');
// 引入组件
var htmlmin = require('gulp-htmlmin'), //html压缩
    minifycss = require('gulp-minify-css'),//css压缩
    jshint = require('gulp-jshint'),//js检测
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify');//提示信息
// 引入compass插件处理生成压缩CSS，后续不再处理css
var compass = require('gulp-compass');
 
gulp.task('compass', function() {
  gulp.src('./stylesheet/scss/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      //以下配置需要与config.rb文件保持一致
      css: 'stylesheet/compiled_css/',
      sass: 'stylesheet/scss',
      style: 'compressed'//压缩css文件
    }))
    .pipe(gulp.dest('./dest/stylesheet/'))
    .pipe(notify({ message: 'compass task ok' }));
});

// 压缩html
gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dest'))
    .pipe(notify({ message: 'html task ok' }));
 
});

// 检查js
gulp.task('lint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'lint task ok' }));
});
 
// 合并、压缩js文件
gulp.task('js', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
    .pipe(notify({ message: 'js task ok' }));
});
// 默认任务
gulp.task('default',['compass', 'lint', 'js', 'html'], function(){
 
  // 监听html文件变化
  // gulp.watch('src/*.html', function(){
  //   gulp.run('html');
  // });
 
  // // Watch .css files
  // //gulp.watch('src/css/*.css', ['css']);
  // gulp.watch('./stylesheet/scss/*.scss',['compass']);
 
  // // Watch .js files
  // gulp.watch('src/js/*.js', ['lint', 'js']);

});
