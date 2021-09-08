const fs = require('fs');
const UglifyJS = require('uglify-js');

const options = {
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

const closeJS = UglifyJS.minify(fs.readFileSync("./src/test.js", "utf8"), options);

fs.writeFileSync("./dist/test.js", closeJS.code, "utf8");
