exports.default = void 0
const dc = require('./dc-abbrv.js').data()
const insular = require('./insular-abbrv.js').data()
const state = require('./state-abbrv.js').data()

console.log(`dc`, dc)
console.log(`insular`, insular)
console.log(`state`, state)

const _list = { ...dc,  ...insular, ...state }
exports["default"] = _list
module.exports = exports["default"]