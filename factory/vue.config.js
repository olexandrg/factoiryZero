module.exports = {
    devServer: {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 3000, // CHANGE YOUR PORT HERE!
      https: true,
      hotOnly: false,
      proxy: {
        '^/api': {  //redirects all api calls to npm server (must be running to function)
          target: 'http://localhost:3070',
          ws: true,
          changeOrigin: true
        },
      },
    },
  }