module.exports = async ({ paper, color, x1, y1, x2, y2, x3, y3 }) => {
  const pathTop = paper.path(`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`)
  pathTop.attr('fill', `#${color.hex}`)
  pathTop.attr('stroke', `#${color.hex}`)
}
