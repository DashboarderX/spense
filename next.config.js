const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          runtimeCaching,
          disable: process.env.NODE_ENV === 'development'
        }
      }
    ],
    [withImages]
  ],
  {
    wepack: (config, options) => {
      if (!options.dev) {
        options.defaultLoaders.babel.options.cache = false
      }

      config.resolve.modules.push(path.resolve(`./`))

      return config
    }
  }
)
