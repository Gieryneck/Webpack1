const path = require('path');


module.exports = {

    entry: './src/app.js',

        output: {

            path: path.resolve('./', 'build'),
            filename: 'app.bundle.js'
        }
};


/*The given sequence of paths is processed from right to left, with each subsequent path prepended until 
an absolute path is constructed. For instance, given the sequence of path segments: /foo, /bar, baz,
 calling path.resolve('/foo', '/bar', 'baz') would return /bar/baz.*/