const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('../helpers');
module.exports = function(){
    return {
        module: {
            rules: [
                {// достает все css файлы, кроме дерективы Ангуляра
                    test: /\.css$/,
                    exclude: helpers.root('src', 'app'),
                    use: ExtractTextPlugin.extract({ 
                        fallback: 'style-loader', 
                        use: [
                            {
                                loader:'css-loader',
                                options:{
                                    minimize:true,
                                    sourceMap: true
                            }
                            },
                            {
                                loader:'autoprefixer-loader',
                                options:{
                                    browsers: ['last 15 version', '> 1%', 'ie 8', 'ie 7'],
                                    add: true
                                }
                            }
                        ]
                    })
                },
                {// Это правило уже не нужно, так как все стлили ангуляра перевел в scss
                    test: /\.css$/,
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
                        }                                               
                    ]
                }
            ]
        }
    }
}