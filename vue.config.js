const host = process.env.VUE_APP_HOST
const port = process.env.VUE_APP_PORT

module.exports = {
  pwa: {
    name: 'vite-vue3-typescript'
  },
  devServer: {
    host,
    port,
    disableHostCheck: true
  },
  publicPath: process.env.VUE_APP_WEBSITE_BASE
}