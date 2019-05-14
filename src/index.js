(async () => {
  // Initialize JSDOM
  require('./util/jsdom')

  // Create all 4-color tiles
  const createFourColorTiles = require('./util/create-4-color-tiles')
  await createFourColorTiles()

  // Create all 3-color tiles
  const createThreeColorTiles = require('./util/create-3-color-tiles')
  await createThreeColorTiles()

  // Create all 2-color tiles
  const createTwoColorTiles = require('./util/create-2-color-tiles')
  await createTwoColorTiles()

  // Create all 1-color tiles
  const createOneColorTiles = require('./util/create-1-color-tiles')
  await createOneColorTiles()

  // Convert to PNGs
  const generatePngFiles = require('./util/generate-png-files')
  await generatePngFiles()
})()
