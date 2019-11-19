exports.getStateList = getStateList

import stateList from './lib/state-list.js'

function getStateList(args) {
  if (!args) {
		return stateList.data().sort()
  } else {
    let outObj = {}
	let outArray = []

    for (var arg in args) {
			// check each turn into string - json
			const add = require("./lib/".concat(args[arg])).data()

			console.log(`add: `, add)

			if (Array.isArray(add)) {
				 outArray = [ ...outArray, ...add ]
    	} else {
				outObj = { ...outObj, ...add }
			}
		}

		if ( outArray.length && !Object.keys(outObj).length ) {
			return outArray.sort()
		} else if ( !outArray.length && Object.keys(outObj).length ) {
			return outObj
		} else {
			console.log(`US-State-Lib input mismatch. args were:`, args)
			return {...outObj, ...outArray}
		}
	}
}