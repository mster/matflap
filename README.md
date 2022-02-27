# Matflap

Faster alternative to Array.prototype.flatMap

``` js
const matflapped = matflap(array, mapFunction)
```

## matflap versus flatMap

See the [benchmarks](./benchmark/README.md).

## Going backwards ...

matflap retains functional parity with `Array.prototype.flatMap` while using ES features that have been in V8 since v4.9 (Node v6+).

``` js
$ nvm use lts/boron
Now using node v6.17.1 (npm v3.10.10)

$ node
> const matflap = require('matflap')

> a = matflap([1,2,3,4,5], e => [e, e*2])
[ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]

> [1,2,3,4,5].flatMap(e => [e, e*2])
TypeError: [1,2,3,4,5].flatMap is not a function
...
```

Running `npm test` on Node versions < v12.0 will fail because tests use `Array.prototype.flatMap`, which will not exist at that version.
