const helpers = require('../helpers');
module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg|ico)$/,
                    use: [
                        {
                            loader:'file-loader',
                            options:{
                                name:'assets/images/[name].[ext]',
                            }
                        }
                    ]
                }
            ]
        }
    }
}