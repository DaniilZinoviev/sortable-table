module.exports = (env = {}) => {
  const { MODE: mode = "development" } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/library.js',
    output: {
      filename: 'sortingTable.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    devServer: {
      open: true,
      openPage: 'public/',
      writeToDisk: true
    }
  }
}