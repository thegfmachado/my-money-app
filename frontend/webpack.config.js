const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // Arquivo de entrada para realizar o build
    entry: './src/index.jsx',

    // Arquivo de saida do build
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },

    // Configurações do servidor para buidar o projeto no modo de desenvolvimento
    devServer: {
        port: 8080,
        // pasta que será carregada no servidor de desenvolvimento
        contentBase: './public'
    },

    /* Configurações para personalizar a maneira que o webpack 
    irá resolver (chamar/identificar) os arquivos */
    resolve: {
        // Ordem das extenções, primeiro faça o build de .js depois de .jsx
        // * A string vazia foi informada porque sem ela n funciona ¬¬ *
        extensions: ['', '.js', '.jsx'],

        // Criando apelidos para podermos importar dependências de modo mais fácil 
        // EX: modules = ./node_modules 
        // EX: bootstrap = modules/admin-lte/bootstrap/js/bootstrap.js
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },

    // Configurações para customizar o processo de build do webpack
    plugins: [

        /* Deixa um módulo disponível em qualquer lugar sem necessidade 
        de importa-lo individualmente em cada arquivo*/
        new webpack.ProvidePlugin({
            /* Esse jquery veio do apelido que foi dado pro caminho modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js.
            Basicamente estamos definindo 3 maneiras diferentes de chamar o jquery 
            em todos os arquivos do projeto sem necessidade de importar isoladamente o jquery neles */
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        /* Plugin que extrai o css que foi compilado e inserido no bundle original do webpack 
          para um arquivo .css separado, nesse caso o app.css */
        new ExtractTextPlugin('app.css')
    ],

    // Configurações que determinam como cada tipo de módulo será tratado 
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}