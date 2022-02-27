'use strict'

// The flatMap method is identical to a map followed by a call to flat of depth 1.
module.exports = matflap

function matflap (array, mapFn, toFlat = false) {
  if (!array || array.constructor !== Array) throw new TypeError()

  if (array.length === 0) return array

  let i = 0
  const iMax = array.length
  const flatMap = []

  for (; i < iMax; i++) {
    if (array[i] && array[i].constructor === Array && toFlat) {
      flatMap.push(...matflap(array[i], mapFn), true)
    } else {
      if (!(i in array)) continue
      const res = mapFn(array[i])
      if (res && res.constructor === Array) flatMap.push(...res)
      else flatMap.push(res)
    }
  }

  return flatMap
}
