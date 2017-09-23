const helpers = require('../helpers');
module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: { 
                                configFileName: helpers.root('src', 'tsconfig.json') 
                            }
                        },
                        {
                            loader:'angular2-template-loader'
                        } 
                    ]
                }
            ]
        }
    }
}