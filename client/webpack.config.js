import path from "path";
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: "./src/index.js", 
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(ts|tsx)$/, // This regex tests for files with .ts or .tsx extensions
        use: 'ts-loader', // Use the ts-loader for matching files
        exclude: /node_modules/, // Exclude files in the node_modules folder
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
    open: {
     app: {
      name: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
     }
    },
  },
  mode: "development",

   // Optional: Add a devtool for source maps to aid in debugging
  devtool: 'inline-source-map',
};

export default config;
