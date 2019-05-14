const path = require('path')
const svgToPng = require('svg-to-png').convert
const config = require('../../package.json').config

module.exports = async () => {
  const rootDir = path.dirname(require.main.filename)
  const svgDir = path.join(rootDir, '..', 'dist', 'svg')
  const pngDir = path.join(rootDir, '..', 'dist', 'png')

  return svgToPng(svgDir, pngDir, {
    defaultWidth: config.size,
    defaultHeight: config.size
  })
}
