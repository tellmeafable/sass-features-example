var gulp = require('gulp'), // трубуется Gulp
		sass = require('gulp-sass'); // требуется Sass

gulp.task('sass', function() { // Создаем задачу "sass"
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('css')) // Выгружаем результат в папку css
	});

gulp.task('watch', function() {
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);