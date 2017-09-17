require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};
module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    console.log('MOD RULES', config.module.rules)

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]

    return config
  }

}
