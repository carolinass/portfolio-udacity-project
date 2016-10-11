var gulp = require( 'gulp' ),
	responsive = require('gulp-responsive');

gulp.task( 'images', function () {
  	return gulp.src( 'images/**/*.{jpg,png}' )
    	.pipe( responsive ({
      		'*.jpg': [{
        		width: 400,
        		rename: { suffix: '-400px' },
      		}, {
        		width: 640,
        		rename: { suffix: '-640px' },
      		}, {
        		width: 800,
        		rename: { suffix: '-800px' },
      		}, {
        		rename: { suffix: '-original' },
	      	}],
      		'*.png': [{
        		width: 250,
      		}, {
        		width: 250 * 2,
        		rename: { suffix: '-2x' },
      		}],
    	}, {
	      	quality: 70,
	      	progressive: true,
	      	withMetadata: false,
    	}))
    	.pipe(gulp.dest('dist/images'));
});
