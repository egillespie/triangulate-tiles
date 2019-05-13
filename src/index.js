(async () => {
  // Initialize JSDOM
  require('./util/jsdom')

  // Create all 4-color tiles
  const createFourColorTiles = require('./util/create-4-color-tiles')
  await createFourColorTiles()

  // Create all 2-color tiles
  const createTwoColorTiles = require('./util/create-2-color-tiles')
  await createTwoColorTiles()
})()
