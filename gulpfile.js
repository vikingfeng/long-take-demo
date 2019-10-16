var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var exec = require('child_process').exec;

// 默认任务
gulp.task('default', function() {
    console.log('Empty Task');
});

// 部署
gulp.task('deploy', function() {
    exec('node ./tasks/qiniu.js', function(err) {
        if (err) console.error(err);
    });
});

// 清除
// gulp.task('clean', function() {
//     gulp.src('./static_resource/')
//         .pipe(clean());
// });

// 替换文本
// gulp.task('replace', function() {
//     gulp.src('./dist/index.html')
//         .pipe(replace('/static/', '/static_resource/static/'))
//         .pipe(gulp.dest('./'));
// });

// 重命名
// gulp.task('rename', function() {
//     gulp.src('./dist/index.html')
//         .pipe(rename('index.php'))
//         .pipe(gulp.dest('./'));
// });