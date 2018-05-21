
# [gulp](https://github.com/gulpjs/gulp)-dox  



[![Travis Build Status](http://img.shields.io/travis/c0b41/gulp-dox.svg?style=flat-square)](https://travis-ci.org/c0b41/gulp-dox) [![Circle Build Status](https://img.shields.io/circleci/project/c0b41/gulp-dox.svg?style=flat-square)](https://circleci.com/gh/c0b41/gulp-dox) 
[![AppVeyor](https://img.shields.io/appveyor/ci/c0b41/gulp-dox.svg?style=flat-square)](https://ci.appveyor.com/project/c0b41/gulp-dox)
 [![Build Status](https://img.shields.io/david/c0b41/gulp-dox.svg?style=flat-square)](https://david-dm.org/c0b41/gulp-dox) 
 ![download-count](https://img.shields.io/npm/dm/webpack-apidoc.svg?style=flat-square)


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

