const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = async ({ config }) => {
  function resolve(dir) {
    return path.join(__dirname, '..', dir)
  }

  config.module.rules.push({
    include: path.resolve(__dirname, '../src'),
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['@babel/preset-typescript']
    }
  })
  config.resolve.extensions.push('.json', '.tsx', '.ts')
  config.resolve.alias = {
    'react-native': 'react-native-web',
    'react-native-svg': 'react-native-svg-web'
  }

  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../assets'),
        to: './assets'
      }
    ])
  )

  return config
}
