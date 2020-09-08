# matflap

Faster alternative to Array.prototype.flatMap with support for Node v6+

`const flatMapd = matflap(array, mapFunction)`

## But does it zoom ?

See the [benchmarks](./benchmark/README.md).

## Backwards compatible, huh?

matFlap retains functional parity with `Array.prototype.flatMap` while using ES features that have been in V8 since v4.9 (Node v6+).

```
$ nvm use lts/boron
Now using node v6.17.1 (npm v3.10.10)

$ node
> const matflap = require('./index')
undefined
> a = matflap([1,2,3,4,5], (e) => [e, e*2 ])
[ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]
```

Running `npm test` on Node versions < v12.0 will fail because tests use `Array.prototype.flatMap`, which doesn't technically exist.
