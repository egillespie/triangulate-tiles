(async () => {
  // Initialize JSDOM
  require('./util/jsdom')
  const config = require('../package.json').config

  // Create a tile
  const createTile = require('./util/create-tile')
  const numColors = config.colors.length

  for (let iTop = 0; iTop < numColors - 3; iTop++) {
    for (let iRight = iTop + 1; iRight < numColors - 2; iRight++) {
      for (let iBottom = iRight + 1; iBottom < numColors - 1; iBottom++) {
        for (let iLeft = iBottom + 1; iLeft < numColors; iLeft++) {
          const t = config.colors[iTop]
          const r = config.colors[iRight]
          const b = config.colors[iBottom]
          const l = config.colors[iLeft]
          await createTile({ t, r, b, l })
        }
      }
    }
  }
})()
