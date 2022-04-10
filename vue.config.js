const host = process.env.VUE_APP_HOST
const port = process.env.VUE_APP_PORT

module.exports = {
  pwa: {
    name: 'v3-ts'
  },
  devServer: {
    host,
    port
  }
}