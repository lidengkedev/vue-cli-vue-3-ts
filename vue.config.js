const host = process.env.VUE_APP_HOST
const port = process.env.VUE_APP_PORT

module.exports = {
  pwa: {
    name: 'vue-cli-vue-3-ts'
  },
  devServer: {
    host,
    port,
    disableHostCheck: true
  },
  publicPath: process.env.VUE_APP_WEBSITE_BASE
}