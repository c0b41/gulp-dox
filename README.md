
# [gulp](https://github.com/gulpjs/gulp)-dox  



[![Build Status](http://img.shields.io/travis/ayhankuru/gulp-dox.svg?style=flat-square)](https://travis-ci.org/ayhankuru/gulp-dox) [![Build Status](https://img.shields.io/david/ayhankuru/gulp-dox.svg?style=flat-square)](https://david-dm.org/ayhankuru/gulp-dox) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)

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

