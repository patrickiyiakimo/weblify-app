const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/v1/urls/public': {
        target: 'http://weblify.onrender.com', // The URL of the remote server
        changeOrigin: true, // Set this to true to enable CORS
      },
    },
  },
};
