const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = env => {
    const isProduction = env === 'production';
    const MiniCSSExtract = new MiniCssExtractPlugin({filename: 'styles.css'});

    return {
        entry: path.join(__dirname, "src", "index.js"),

        output: {
            path: path.join(__dirname, isProduction ? "docs" : "public", "dist"),
            filename: "bundle.js"
        },
        plugins: [MiniCSSExtract],
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }

                    ],
                    test: /\.s?[ac]ss$/
                },
                {
                    test: /\.(woff|woff2)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            name: 'fonts/[hash].[ext]',
                            limit: 5000,
                            mimetype: 'application/font-woff'
                        }
                    }
                },
                {
                    test: /\.(ttf|eot|svg)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[hash].[ext]'
                        }
                    }
                }
            ]
        },

        devtool: isProduction ? "source-map": 'inline-source-map',

        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
    }

};

