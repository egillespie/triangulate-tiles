const config = require('../../package.json').config
const createTile = require('./create-tile')

module.exports = async () => {
  const numColors = config.colors.length
  const quantity = config.quantities[3] || 1

  // Used to switch positions of second and third colors
  let toggle = true

  // Produces 60 unique tiles
  for (let primary = 0; primary < numColors; primary++) {
    const t = config.colors[primary]
    const r = config.colors[primary]

    for (let secondary = 0; secondary < numColors; secondary++) {
      if (secondary === primary) continue

      for (let terciary = secondary + 1; terciary < numColors; terciary++) {
        if (terciary === primary) continue

        // Distribute second and third colors across bottom and left sides
        const b = config.colors[toggle ? secondary : terciary]
        const l = config.colors[toggle ? terciary : secondary]
        toggle = !toggle

        await createTile({ t, r, b, l, quantity })
      }
    }
  }
}
