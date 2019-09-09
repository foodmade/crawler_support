const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
        } else {
            // mutate for development...
        }
    },
    configureWebpack: {
        plugins: [
            new MonacoWebpackPlugin()
        ]
    }
};

