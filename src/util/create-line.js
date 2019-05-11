module.exports = async ({ paper, x1, y1, x2, y2 }) => {
  const line = paper.path(`M ${x1} ${y1} L ${x2} ${y2}`)
  line.attr('fill', 'none')
  line.attr('stroke', '#000')
  line.attr('stroke-width', 10)
  line.attr('stroke-linecap', 'round')
}
