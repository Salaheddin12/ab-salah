const withYaml = require('next-plugin-yaml')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = {
  webpack(config) {
    config.plugins = config.plugins.filter(
      p => p.constructor.name !== 'UglifyJsPlugin'
    )
    config.plugins.push(new UglifyJsPlugin())
    return config
  }
}

module.exports = withYaml(module.exports)

module.exports = withBundleAnalyzer(module.exports)
