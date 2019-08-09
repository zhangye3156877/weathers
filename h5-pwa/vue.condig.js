module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/m-32x32.png',
      favicon16: 'img/icons/m-16x16.png',
      appleTouchIcon: 'img/icons/m-152x152.png',
      // maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/m-144x144.png'
    }
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },
      less: {
        rules: [
          {
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader', // creates style nodes from JS strings
              },
              {
                loader: 'css-loader', // translates CSS into CommonJS
              },
              {
                loader: 'less-loader', // compiles Less to CSS
              },
            ],
          },
        ],
      }
    }
  }
}