var gulp=require("gulp"),uglify=require("gulp-uglify");plumber=require("gulp-plumber"),livereload=require("gulp-livereload"),gulp.task("scripts",function(){gulp.src("*.js").pipe(uglify()).pipe(gulp.dest("build/js"))}),gulp.task("watch",function(){livereload();gulp.watch("*.js",["scripts"])}),gulp.task("default",["scripts","watch"]);