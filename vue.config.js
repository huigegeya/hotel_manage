const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  configureWebpack: {
      module: {
          rules: [
            // 全局导入 scss
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'sass-resources-loader',
                  options: {
                    resources: ['./src/styles/variables.scss']
                  }
                }
              ]
            }
          ]
        }
    }
})
