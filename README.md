# matflap

Faster alternative to Array.prototype.flatMap with support for Node v6+

## zoom ?

**npm run benchmark**

```
> matflap@0.0.0 benchmark /home/m/code/node/matflap
> node ./test/benchmark.js && node ./test/benchmark-fn.js

benchmark.js
fn = (e) => e;

Array.prototype.flatMap.call x 753,526 ops/sec ±0.49% (95 runs sampled)
[].flatMap.call x 738,390 ops/sec ±0.17% (97 runs sampled)
cached flatMap.call x 748,878 ops/sec ±0.44% (93 runs sampled)
matFlap x 26,716,980 ops/sec ±0.90% (95 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 8,899 ops/sec ±0.17% (95 runs sampled)
[].flatMap.call x 8,882 ops/sec ±0.24% (97 runs sampled)
cached flatMap.call x 8,927 ops/sec ±0.21% (95 runs sampled)
matFlap x 251,816 ops/sec ±0.48% (92 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 8.05 ops/sec ±1.32% (24 runs sampled)
[].flatMap.call x 8.03 ops/sec ±1.24% (24 runs sampled)
cached flatMap.call x 7.81 ops/sec ±1.43% (24 runs sampled)
matFlap x 54.14 ops/sec ±3.64% (57 runs sampled)
fastest is matFlap

benchmark-fn.js
fn = (e) => [e, e.repeat(1), e.repeat(2)];

Array.prototype.flatMap.call x 222,880 ops/sec ±0.31% (97 runs sampled)
[].flatMap.call x 219,616 ops/sec ±0.44% (97 runs sampled)
cached flatMap.call x 219,013 ops/sec ±0.22% (95 runs sampled)
matFlap x 1,933,487 ops/sec ±0.70% (94 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 2,473 ops/sec ±0.43% (96 runs sampled)
[].flatMap.call x 2,451 ops/sec ±0.37% (95 runs sampled)
cached flatMap.call x 2,455 ops/sec ±0.41% (97 runs sampled)
matFlap x 20,908 ops/sec ±0.82% (93 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 1.95 ops/sec ±2.15% (9 runs sampled)
[].flatMap.call x 1.93 ops/sec ±1.75% (9 runs sampled)
cached flatMap.call x 1.91 ops/sec ±2.12% (9 runs sampled)
matFlap x 6.49 ops/sec ±3.76% (21 runs sampled)
fastest is matFlap
```

`const flat = matflap(array, mapFunction)`

## Node 6

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
