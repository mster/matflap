"use strict";

const tape = require("tape");
const matflap = require("../index");

tape("empty array", function (t) {
  const a = [];
  const fn = (e) => e;

  const actual = matflap(a, fn);
  const expected = a.flatMap(fn);

  t.deepEqual(actual, expected);
  t.end();
});

tape("'noop' map function", function (t) {
  const a = new Array(100).fill(10);
  const fn = (e) => e;

  const actual = matflap(a, fn);
  const expected = a.flatMap(fn);

  t.deepEqual(actual, expected);
  t.end();
});

tape("map function: array return", function (t) {
  const a = new Array(100).fill(10);
  const fn = (e) => [e];

  const actual = matflap(a, fn);
  const expected = a.flatMap(fn);

  t.deepEqual(actual, expected);
  t.end();
});

tape("map function: multiple element return", function (t) {
  const a = new Array(100).fill(10);
  const fn = (e) => [e, e * 2, e * 3];

  const actual = matflap(a, fn);
  const expected = a.flatMap(fn);

  t.deepEqual(actual, expected);
  t.end();
});

tape("map function: nested array return", function (t) {
  const a = new Array(100).fill(10);
  const fn = (e) => [[e]];

  const actual = matflap(a, fn);
  const expected = a.flatMap(fn);

  t.deepEqual(actual, expected);
  t.end();
});
