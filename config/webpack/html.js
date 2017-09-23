const helpers = require('../helpers');
module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        }
    }
}