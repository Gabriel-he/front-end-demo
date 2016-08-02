var gulp = require('gulp');
// 引入组件
var htmlmin = require('gulp-htmlmin'), //html压缩
    notify = require('gulp-notify'),//提示信息
    clean = require('gulp-clean');//清空文件夹
 
// 引入compass插件处理生成压缩CSS，后续不再处理css
var compass = require('gulp-compass');
 
gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      //以下配置需要与config.rb文件保持一致
      css: 'dest/stylesheet/',
      sass: 'sass',
      style: 'compressed'//压缩css文件
    }))
    .pipe(gulp.dest('./dest/stylesheet/'))
    .pipe(notify('compass task ok'));
});

// 压缩html
gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dest'))
    .pipe(notify('html task ok'));
 
});
//输出前清空目标文件夹
gulp.task('clean', function () {
    return gulp.src('dest/', {read: false})
        .pipe(clean())
        .pipe(notify('clean task ok'));
});

// 默认任务
gulp.task('default',['clean'], function(){
  gulp.run('compass','html');
  // 监听html文件变化
  // gulp.watch('./*.html', ['html']);
  // Watch .css files
  // 
  // gulp.watch('./sass/*.scss',['compass']);
 
});
