// Module imports
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Module exports
module.exports = {
  // defines the mode in which webpack should run
  mode: process.env.MODE,
  //   defines the entry point of the react app
  entry: path.join(__dirname, "src", "index.jsx"),
  //   defines the output configuration
  output: {
    path: path.resolve(__dirname, "dist"),
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: "[name].bundle.js",
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: "[name].bundle.js",
  },
  module: {
    /* 
    The below rules informs webpack about the loaders / preprocessors it must use with 
    whose help it shall be able to load files with different extensions
    */
    rules: [
      {
        test: /\.?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //   Defines the additional plugins we will use
  plugins: [
    // This plugin injects the newly created script into the index.html file and copies over the file to the dist folder
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    port: 3000,
  },
};
