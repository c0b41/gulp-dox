'use strict';
var expect = require('expect.js');
var fs = require('fs');
var gutil = require('gulp-util');
var gulpDox = require('../index.js');

it('GulpDox Test', function (cb) {
	var stream = gulpDox();

	stream.on('data', function (file) { 
		expect(file.contents.toString()).to.eql(fs.readFileSync(__dirname + '/expected/hello.json').toString().trim());
		expect(file.relative).to.eql('hello.json');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixtures',
		path: __dirname + '/fixtures/hello.js',
		contents: fs.readFileSync(__dirname + '/fixtures/hello.js')
	}));

	stream.end();
});
