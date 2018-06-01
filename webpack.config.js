const path = require('path');

module.exports ={
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'        
    },
    module: {
        rules: [
                { 
                    loader: ['babel-loader'],
                    test: /\.js$/,
                    include: path.join(__dirname, './src'),
                    exclude: [/node_modules/]
                }, 
                {
                    test: /\.s?css$/,
                    use: [
                            {
                                loader: 'style-loader'
                            },
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                }
            ]
    },
    mode: 'development',
    //development only, this is an expensive call
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};