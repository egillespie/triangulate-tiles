(async () => {
  // Initialize JSDOM
  require('./util/jsdom')

  // Create all 4-color tiles
  const createFourColorTiles = require('./util/create-4-color-tiles')
  await createFourColorTiles()
})()
