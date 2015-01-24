
# [gulp](https://github.com/gulpjs/gulp)-dox  [![Build Status](https://img.shields.io/david/ayhankuru/gulp-dox.svg?style=flat-square)](https://david-dm.org/ayhankuru/gulp-dox)

> gulp-dox plugin for [dox](https://github.com/visionmedia/dox)

## Usage

First, install `gulp-dox` as a development dependency:

```shell
npm install --save-dev gulp-dox
```

Then, add it to your `gulpfile.js`:

```javascript
var dox = require("gulp-dox");

gulp.task("dox",function(){
	return 	gulp.src("./src/*.ext")
					.pipe(dox())
					.pipe(gulp.dest("./dist"))
});
```

## API

### gulp-dox(options)




## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-gulp-dox
[npm-image]: https://badge.fury.io/js/gulp-gulp-dox.png

[travis-url]: http://travis-ci.org/ayhankuru/gulp-gulp-dox
[travis-image]: https://secure.travis-ci.org/ayhankuru/gulp-gulp-dox.png?branch=master

[coveralls-url]: https://coveralls.io/r/ayhankuru/gulp-gulp-dox
[coveralls-image]: https://coveralls.io/repos/ayhankuru/gulp-gulp-dox/badge.png

[depstat-url]: https://david-dm.org/ayhankuru/gulp-gulp-dox
[depstat-image]: https://david-dm.org/ayhankuru/gulp-gulp-dox.png
