(async () => {
  // Initialize JSDOM
  require('./util/jsdom')
  const config = require('../package.json').config

  // Create a tile
  const createTile = require('./util/create-tile')
  const t = config.colors[0]
  const r = config.colors[1]
  const b = config.colors[2]
  const l = config.colors[2]
  await createTile({ t, r, b, l })
})()
