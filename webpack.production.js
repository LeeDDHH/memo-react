const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  // electron bundle
  {
    mode: "production",
    entry: "./src/main/landing/main.js",
    output: {
      path: `${__dirname}/dist/main/landing`,
      filename: "[name].js",
    },
    target: "electron-main",
    node: {
      __dirname: false,
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loaders: "babel-loader",
          query: {
            plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]],
          },
        },
      ],
    },
  },
  // react bundle
  {
    mode: "production",
    entry: "./src/renderer/landing/index.jsx",
    output: {
      path: `${__dirname}/dist/renderer/landing`,
      filename: "index.js",
    },
    target: "electron-renderer",
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        filename: "index.html",
        template: "./src/renderer/landing/index.html",
      }),
    ],
  },
];
