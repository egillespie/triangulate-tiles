const config = require('../../package.json').config
const createTile = require('./create-tile')

module.exports = async () => {
  const quantity = config.quantities[1] || 1

  // Produces 6 unique tiles
  for (const color of config.colors) {
    const t = color
    const r = color
    const l = color
    const b = color
    await createTile({ t, r, b, l, quantity })
  }
}
