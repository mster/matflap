"use strict";

// The flatMap method is identical to a map followed by a call to flat of depth 1.
module.exports = function (array, mapFn) {
  if (!array) throw new TypeError();

  if (array.length === 0) return array;

  let i = 0;
  const iMax = array.length;
  const flatMap = [];

  for (; i < iMax; i++) {
    if (i.constructor === Array) {
      flatMap.push(...this(array[i], mapFn));
    } else {
      const res = mapFn(array[i]);
      if (res.constructor === Array) flatMap.push(...res);
      else flatMap.push(res);
    }
  }

  return flatMap;
};
