const fs = require('fs')

module.exports = async function (filename, content) {
  const path = `dist/${filename}`
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, err => err ? reject(err) : resolve())
  })
}
