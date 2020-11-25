module.exports = (env = {}) => {
  const { MODE: mode = "development" } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  return {
    entry: {
      main: 'src/library.js'
    },

    modules: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}