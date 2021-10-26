var fs = require('fs');
var UglifyJS = require('uglify-js');

var options = {
    "compress": true,
    "mangle": {
        "properties": {
            "builtins": false,
            "regex": /_$/,
            "reserved": ["reserved_variable"]
        },
        "reserved": ["names"]
    },
    "toplevel": true,
    "nameCache": {}
};

var closeJS = UglifyJS.minify(fs.readFileSync("./src/test.js", "utf8"), options);

fs.writeFileSync("./dist/test.js", closeJS.code, "utf8");
