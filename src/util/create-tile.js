const raphael = require('raphael')
const jsdom = require('./jsdom')
const line = require('./create-line')
const triangle = require('./create-triangle')
const writeFile = require('./write-file')

const config = require('../../package.json').config
const pEnd = config.size
const pMid = Math.round(config.size / 2)

module.exports = async ({ t, r, b, l }) => {
  jsdom.window.document.body.innerHTML = ''
  const paper = raphael(0, 0, config.size, config.size)

  // Top triangle
  triangle({
    paper, color: t, x1: pMid, y1: pMid, x2: 0, y2: 0, x3: pEnd, y3: 0
  })

  // Right triangle
  triangle({
    paper, color: r, x1: pMid, y1: pMid, x2: pEnd, y2: 0, x3: pEnd, y3: pEnd
  })

  // Bottom triangle
  triangle({
    paper, color: b, x1: pMid, y1: pMid, x2: pEnd, y2: pEnd, x3: 0, y3: pEnd
  })

  // Left triangle
  triangle({
    paper, color: l, x1: pMid, y1: pMid, x2: 0, y2: pEnd, x3: 0, y3: 0
  })

  // Top-right separator line
  if (t.hex !== r.hex) {
    line({ paper, x1: pMid, y1: pMid, x2: pEnd, y2: 0 })
  }

  // Bottom-right separator line
  if (r.hex !== b.hex) {
    line({ paper, x1: pMid, y1: pMid, x2: pEnd, y2: pEnd })
  }

  // Bottom-left separator line
  if (b.hex !== l.hex) {
    line({ paper, x1: pMid, y1: pMid, x2: 0, y2: pEnd })
  }

  // Top-left separator line
  if (l.hex !== t.hex) {
    line({ paper, x1: pMid, y1: pMid, x2: 0, y2: 0 })
  }

  const id = `${t.name}-${r.name}-${b.name}-${l.name}-face`
  await writeFile(`svg/${id}.svg`, jsdom.window.document.body.innerHTML)
}
