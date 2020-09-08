'use strict'

const matflap = require('../index')
const flatMap = [].flatMap

const { Suite } = require('benchmark')

const suiteA1 = new Suite()
const suiteA3 = new Suite()
const suiteA6 = new Suite()

const A1 = new Array(10).fill(['{"foo":"bar"}'])
const A3 = new Array(1e3).fill(['{"foo":"bar"}'])
const A6 = new Array(1e6).fill(['{"foo":"bar"}'])
const fn = (e) => JSON.parse(e)

console.log('benchmark-parse.js')
console.log('fn = (e) => JSON.parse(e);\n')

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
    console.log(`fastest is ${this.filter('fastest').map('name')}\n`)
  })
  .run()
