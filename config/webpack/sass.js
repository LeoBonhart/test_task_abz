const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('../helpers');
module.exports = function(){
    return {
        module: {
            rules: [
                {// Для каждого компонента ангуляра (указанного в styleUrls) выполняет эти правила 
                    test: /\.scss$/,
                    exclude:  helpers.root('node_modules') ,
                    include: helpers.root('src', 'app'),
                    use: [ 
                            {
                                loader: 'css-to-string-loader'
                            },   
                            {
                                loader: 'css-loader',
                                options:{
                                    minimize:true
                                }
                            },
                            {
                                loader:'autoprefixer-loader',
                                options:{
                                    browsers: ['last 15 version', '> 1%', 'ie 8', 'ie 7'],
                                    add: true
                                }
                            },                           
                            {
                                loader:'sass-loader',
                                options:{
                                    sourceMap: true
                                }
                            }
                        ]
                  
                },
                {// Для всех scss файлов, кром тех, которые находятся в дерективе Ангуляра и НодМодуля применяются правила, и помещаются в файл
                    test: /\.scss$/,
                    exclude: [ helpers.root('src', 'app'), helpers.root('node_modules') ],
                    use: ExtractTextPlugin.extract({ 
                        fallback: 'style-loader', 
                        use: [                               
                            {
                                loader: 'css-loader',
                                options:{
                                    minimize:true
                                }
                            },
                            {
                                loader:'autoprefixer-loader',
                                options:{
                                    browsers: ['last 15 version', '> 1%', 'ie 8', 'ie 7'],
                                    add: true
                                }
                            },
                            {
                                loader:'sass-loader',
                                options:{
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        }
    }
}