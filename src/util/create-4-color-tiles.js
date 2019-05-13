const config = require('../../package.json').config
const createTile = require('./create-tile')

module.exports = async () => {
  const numColors = config.colors.length
  const quantity = config.quantities[4] || 1

  // Produces 15 unique tiles
  for (let top = 0; top < numColors - 3; top++) {
    for (let right = top + 1; right < numColors - 2; right++) {
      for (let bottom = right + 1; bottom < numColors - 1; bottom++) {
        for (let left = bottom + 1; left < numColors; left++) {
          const t = config.colors[top]
          const r = config.colors[right]
          const b = config.colors[bottom]
          const l = config.colors[left]
          await createTile({ t, r, b, l, quantity })
        }
      }
    }
  }
}
