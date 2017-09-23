const helpers = require('../helpers');
module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    use: [
                        {
                            loader:'file-loader',
                            options:{
                                name:'assets/fonts/[name].[hash].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    }
}