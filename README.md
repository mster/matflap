# matflap

Faster Array.prototype.flatMap for Node v6+

## zoom ?

**npm run benchmark**

```
Array.prototype.flatMap#length=10 x 790,428 ops/sec ±0.15% (97 runs sampled)
matflap#length=10 x 18,576,044 ops/sec ±1.12% (87 runs sampled)
Fastest is matflap#length=10

Array.prototype.flatMap#length=1k x 9,415 ops/sec ±0.21% (95 runs sampled)
matflap#length=1k x 163,532 ops/sec ±0.99% (87 runs sampled)
Fastest is matflap#length=1k

Array.prototype.flatMap#length=1M x 8.17 ops/sec ±1.61% (25 runs sampled)
matflap#length=1M x 46.75 ops/sec ±3.78% (62 runs sampled)
Fastest is matflap#length=1M
```

`const flat = matflap(array, mapFunction)`

## Node 6

```
$ nvm use lts/boron
Now using node v6.17.1 (npm v3.10.10)

$ node
> const matflap = require('./index')
undefined
> a = matflap([1,2,3,4,5], (e) => [e, e*2 ])
[ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]
```

Tests will fail because they use `Array.prototype.flatMap`
