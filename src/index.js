(async () => {
  const writeFile = require('./util/write-file.js')

  const JSDOM = require('jsdom').JSDOM
  const jsdom = new JSDOM('')
  global.window = jsdom.window
  global.document = jsdom.window.document

  const raphael = require('raphael')
  raphael.setWindow(jsdom.window)

  // Creates canvas 320 × 200 at 10, 50
  const paper = raphael(10, 50, 320, 200)

  // Creates circle at x = 50, y = 40, with radius 10
  const circle = paper.circle(50, 40, 10)
  // Sets the fill attribute of the circle to red (#f00)
  circle.attr('fill', '#0cf')

  // Sets the stroke attribute of the circle to white
  circle.attr('stroke', '#fff')

  const svg = jsdom.window.document.body.innerHTML
  await writeFile('file.svg', svg)
})()
