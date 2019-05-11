const JSDOM = require('jsdom').JSDOM
const jsdom = new JSDOM('')
global.window = jsdom.window
global.document = jsdom.window.document

const raphael = require('raphael')
raphael.setWindow(jsdom.window)

module.exports = jsdom
