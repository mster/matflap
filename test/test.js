'use strict'

const tape = require('tape')
const matflap = require('../index')

tape('empty array', function (t) {
  const a = []
  const fn = (e) => e

  const actual = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(actual, expected)
  t.end()
})

tape('nested array', function (t) {
  const a = new Array(100).fill([1, 2, 3, 4, 5])
  const fn = (e) => e

  const actual = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(actual, expected)
  t.end()
})

tape('noop map', function (t) {
  const a = new Array(100).fill(10)
  const fn = (e) => e

  const actual = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(actual, expected)
  t.end()
})

tape('nested', function (t) {
  const a = new Array(100).fill(10)
  const fn = (e) => [e]

  const actual = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(actual, expected)
  t.end()
})

tape('double nested', function (t) {
  const a = new Array(100).fill(10)
  const fn = (e) => [[e]]

  const actual = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(actual, expected)
  t.end()
})

tape('multiple', function (t) {
  const a = new Array(100).fill(10)
  const fn = (e) => [e, e * 2, e * 3]

  const actual = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(actual, expected)
  t.end()
})

tape('deeply nested', function (t) {
  const a = new Array(100).fill([[[[['string'], 'string']]]])
  const fn = e => e + '-'

  const acutal = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(acutal, expected)
  t.end()
})

tape('undefined', function (t) {
  const a = new Array(100).fill(undefined)
  const fn = e => e

  const acutal = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(acutal, expected)
  t.end()
})

tape('empty', function (t) {
  const a = new Array(100)
  const fn = e => e

  const acutal = matflap(a, fn)
  const expected = a.flatMap(fn)

  t.deepEqual(acutal, expected)
  t.end()
})
