"use strict";

const matflap = require("../index");
const { Suite } = require("benchmark");

const suiteA1 = new Suite();
const suiteA3 = new Suite();
const suiteA6 = new Suite();

const A1 = new Array(10).fill("⬢");
const A3 = new Array(1e3).fill("⬢");
const A6 = new Array(1e6).fill("⬢");
const fn = (e) => e;

suiteA1
  .add("Array.prototype.flatMap#length=10", function () {
    A1.flatMap(fn);
  })
  .add("matflap#length=10", function () {
    matflap(A1, fn);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name") + "\n");
  })
  .run();

suiteA3
  .add("Array.prototype.flatMap#length=1k", function () {
    A3.flatMap(fn);
  })
  .add("matflap#length=1k", function () {
    matflap(A3, fn);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name") + "\n");
  })
  .run();

suiteA6
  .add("Array.prototype.flatMap#length=1M", function () {
    A6.flatMap(fn);
  })
  .add("matflap#length=1M", function () {
    matflap(A6, fn);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name") + "\n");
  })
  .run();
