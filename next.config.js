const path = require('path')
const withReactSvg = require('next-react-svg')


module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/images'),
  webpack(config, options) {
    return config
  }
})