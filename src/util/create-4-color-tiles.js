const config = require('../../package.json').config
const createTile = require('./create-tile')

module.exports = async () => {
  const numColors = config.colors.length
  const quantity = config.quantities[4] || 1

  // Produces 15 unique tiles
  for (let iTop = 0; iTop < numColors - 3; iTop++) {
    for (let iRight = iTop + 1; iRight < numColors - 2; iRight++) {
      for (let iBottom = iRight + 1; iBottom < numColors - 1; iBottom++) {
        for (let iLeft = iBottom + 1; iLeft < numColors; iLeft++) {
          const t = config.colors[iTop]
          const r = config.colors[iRight]
          const b = config.colors[iBottom]
          const l = config.colors[iLeft]
          await createTile({ t, r, b, l, quantity })
        }
      }
    }
  }
}
