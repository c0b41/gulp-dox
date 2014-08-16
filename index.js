var through = require("through2"),
	gutil = require("gulp-util"),
	dox =require("dox");

module.exports = function(opt){
    return through.obj(function (file, enc, cb) {


        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-dox', 'Streaming not supported'));
            return cb();
        }


		 try {
			var parsed = dox.parseComments(file.contents.toString());
		            parsed =JSON.stringify(parsed, null, 2)

		file.contents = new Buffer(parsed);
		file.path = gutil.replaceExtension(file.path, '.json');
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-dox', err));
		}

        this.push(file);

        return cb();


    });
};
