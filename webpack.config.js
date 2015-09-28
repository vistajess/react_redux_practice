module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "dist/script.js"
    },
    module: {
        loaders: [
             { test: /\.(js|jsx)$/, loader: 'babel-loader' }
        ]
    },
         resolve: {
    extensions: ['', '.js', '.jsx']
  }
};