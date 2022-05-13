var fs = require('fs');
var UglifyJS = require('uglify-js');

var options = {
    compress: {
        top_retain: ['unUsedFunction']
    },
    mangle: {
        properties: {
            builtins: false,
            regex: /_$/,
            reserved: [
                'reservedVariable',
                'reservedProperty'
            ]
        },
        reserved: [
            'names',
            'unUsedFunction',
            'unUsedVariable'
        ]
    },
    toplevel: true,
    nameCache: {}
};

var closeJS = UglifyJS.minify(fs.readFileSync('./src/test.js', 'utf8'), options);

fs.writeFileSync('./dist/test.js', closeJS.code, 'utf8');
