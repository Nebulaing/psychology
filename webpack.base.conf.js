// 配置打包环境

const path=require("path")
const webpack = require('webpack');
const { VueLoaderPlugin }=require("vue-loader")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin')
const { DefinePlugin} = require('webpack')
//将css提取到单独的文件中
const MiniCssExtract = require('mini-css-extract-plugin');
//css压缩
// const OptimizeCss = require('optimize-css-assets-webpack-plugin');
//压缩js文件
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV=process.env.NODE_ENV;
// const {
//     ElementPlusResolver
// } = require('unplugin-vue-components/resolvers')



const htmlPlugin = new HtmlPlugin({
    template: './public/index.html', // 这是html模板存放的地址
    filename: './index.html',
})

module.exports={
    // 入口文件
    entry:"./src/main.js",
    // devtool: 'inline-source-map',
    // devServer: {
    //     static:'./public',
    //     // contentBase: './dist',
    //     hot: true,
    //     open:true,
    //     // port: 8686,
    //     // historyApiFallback: true
    // },
    // 出口文
    output:{
        // 出口文件路径
        path:path.join(__dirname,"dist"),
        // 文件名
        filename:"main.js"
    },
    module: {
        rules:[
        // 各类loader配置项
            {
                // 解析scss文件
                test: /\.scss$/,
                use: ['style-loader',  'scss-loader']
            },
            {
                // 解析css文件
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 解析less文件
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            },
            {
                // 解析vue文件
                test:/\.vue$/,
                use:["vue-loader"]
            },
            //配置图片的loader
            // {
            //     test: /\.(gif|png|jpe?g)$/,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             esModule: false
            //         }
            //     },
            //     type: 'javascript/auto',
            // },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:10240 * 10240,
                            name:'[hash:10].[ext]',
                            esModule:false,
                        },
                    }
                ],
                type:'javascript/auto',
            },

            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude:/node_modules/
            }

        ]
    },
    // 插件:专门帮你压缩重命名合并的插件
    plugins: [
        // 会在打包完成后自动生成一个 html 文件并且引入对应的 bundle
        new VueLoaderPlugin(),
        htmlPlugin,
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 选择模板 public/index.html
            template: './public/templates/index.html',
            // 打包后的名字
            filename: path.resolve(__dirname, './dist/templates/index.html'),
            // js文件插入 body里
            inject: 'body',
        }),
        new DefinePlugin({
             // 此处会将我们设置的值原封不动的进行去除，所以需要加上引号
            BASE_URL: "'./'",

        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__:false
        })

        // new webpack.HotModuleReplacementPlugin(),
    ],

    resolve: {
        // 路径别名
        alias: {
            '@': path.resolve('./src'),
            '@co':path.resolve(__dirname,'src/components')
        },
        // 引入文件时省略后缀
        extensions: ['.js', '.ts', '.less', '.vue'],
    },
}
