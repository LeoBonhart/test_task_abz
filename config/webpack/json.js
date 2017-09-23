const helpers = require('../helpers');
module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.json$/,
                    use: [
                        {
                            loader:'file-loader',
                            options:{
                                name:'assets/json/[name].[ext]',
                            }
                        }
                    ]
                }
            ]
        }
    }
}