const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: `/GITHUB-FINDER/`,
  transpileDependencies: true
})
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            {
              use: ['raw-loader', 'pug-plain-loader']
            }
          ]
        }
      ]
    }
  }
}