Object.defineProperty(exports, "__esModule", {
  value: true
})

exports.default = void 0
const dc = require('./dc-list.js').data()
const insular = require('./insular-list.js').data()
const state = require('./state-list.js').data()

console.log(`dc`, dc)
console.log(`insular`, insular)
console.log(`state`, state)

const list = [ ...dc, ...insular, ...state ]
exports["default"] = list
module.exports = exports["default"]