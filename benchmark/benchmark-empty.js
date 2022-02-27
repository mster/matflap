'use strict'

const matflap = require('../index')
const flatMap = [].flatMap

const { Suite } = require('benchmark')

const suiteA1 = new Suite()
const suiteA3 = new Suite()
const suiteA6 = new Suite()

function halfEmpty (A) {
  A.forEach((v, i) => {
    if (i % 2 === 0) A[i] = i
  })
  return A
}

const A1 = halfEmpty(new Array(10))
const A3 = halfEmpty(new Array(1e3))
const A6 = halfEmpty(new Array(1e6))
const fn = e => e

console.log('benchmark-empty.js')
console.log('fn = e => e;\n')

console.log(`Array.length = ${A1.length}`)
suiteA1
  .add('Array.prototype.flatMap.call', function () {
    Array.prototype.flatMap.call(A1, fn)
  })
  .add('[].flatMap.call', function () {
    [].flatMap.call(A1, fn)
  })
  .add('cached flatMap.call', function () {
    flatMap.call(A1, fn)
  })
  .add('matFlap', function () {
    matflap(A1, fn)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log(`fastest is ${this.filter('fastest').map('name')}\n`)
  })
  .run()

console.log(`Array.length = ${A3.length}`)
suiteA3
  .add('Array.prototype.flatMap.call', function () {
    Array.prototype.flatMap.call(A3, fn)
  })
  .add('[].flatMap.call', function () {
    [].flatMap.call(A3, fn)
  })
  .add('cached flatMap.call', function () {
    flatMap.call(A3, fn)
  })
  .add('matFlap', function () {
    matflap(A3, fn)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log(`fastest is ${this.filter('fastest').map('name')}\n`)
  })
  .run()

console.log(`Array.length = ${A6.length}`)
suiteA6
  .add('Array.prototype.flatMap.call', function () {
    Array.prototype.flatMap.call(A6, fn)
  })
  .add('[].flatMap.call', function () {
    [].flatMap.call(A6, fn)
  })
  .add('cached flatMap.call', function () {
    flatMap.call(A6, fn)
  })
  .add('matFlap', function () {
    matflap(A6, fn)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log(`fastest is ${this.filter('fastest').map('name')}`)
  })
  .run()

console.log(`${'-'.repeat(40)}\n`)
