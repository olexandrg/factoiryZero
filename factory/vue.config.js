module.exports = {
    devServer: {
      open: process.platform === 'darwin',
      // target: 'https://localhost:3000',
      host: '0.0.0.0',
      port: 3000, // CHANGE YOUR PORT HERE!
      https: true,
      hotOnly: false,
      proxy: {
        '^/api': {
          target: 'https://localhost:5001',
          ws: true,
          changeOrigin: true
        },
      },
    },
  }