const config = require('../../package.json').config
const createTile = require('./create-tile')

module.exports = async () => {
  const quantity = config.quantities[2] || 1

  // Produces 30 unique tiles
  for (const primaryColor of config.colors) {
    const t = primaryColor
    const r = primaryColor
    const l = primaryColor

    for (const secondaryColor of config.colors) {
      if (primaryColor.hex !== secondaryColor.hex) {
        const b = secondaryColor
        await createTile({ t, r, b, l, quantity })
      }
    }
  }
}
