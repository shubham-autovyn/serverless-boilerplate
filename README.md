
# Serverless Boilerplate - Extended

Includes DynamoDB, S3, SQS stubs and structure for Redshift interface.

Install:
  npm install

Run locally:
  npx serverless offline

Test:
  npm test



webpack config file --------------->




const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
