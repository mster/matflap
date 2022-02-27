# Benchmarks

```
npm run benchmark
```

## Results

TL;DR - Matflap is always faster

```
❯ npm run benchmark

> matflap@0.0.4 benchmark /home/m/Code/matflap
> node ./benchmark/benchmark.js && node ./benchmark/benchmark-empty.js && node ./benchmark/benchmark-nested.js && node ./benchmark/benchmark-parse.js && node ./benchmark/benchmark-repeat.js

benchmark.js
fn = (e) => e;

Array.prototype.flatMap.call x 734,776 ops/sec ±0.28% (98 runs sampled)
[].flatMap.call x 739,363 ops/sec ±0.23% (95 runs sampled)
cached flatMap.call x 734,922 ops/sec ±0.25% (95 runs sampled)
matFlap x 15,923,365 ops/sec ±1.27% (91 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 8,853 ops/sec ±0.19% (96 runs sampled)
[].flatMap.call x 8,862 ops/sec ±0.13% (98 runs sampled)
cached flatMap.call x 8,859 ops/sec ±0.20% (97 runs sampled)
matFlap x 137,924 ops/sec ±0.16% (95 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 7.88 ops/sec ±1.39% (24 runs sampled)
[].flatMap.call x 7.87 ops/sec ±1.39% (24 runs sampled)
cached flatMap.call x 7.87 ops/sec ±1.42% (24 runs sampled)
matFlap x 45.21 ops/sec ±4.35% (61 runs sampled)
fastest is matFlap
----------------------------------------

benchmark-empty.js
fn = e => e;

Array.length = 10
Array.prototype.flatMap.call x 6,238,777 ops/sec ±0.33% (94 runs sampled)
[].flatMap.call x 6,246,289 ops/sec ±0.26% (90 runs sampled)
cached flatMap.call x 6,250,053 ops/sec ±0.33% (97 runs sampled)
matFlap x 34,989,403 ops/sec ±0.89% (82 runs sampled)
fastest is matFlap

Array.length = 1000
Array.prototype.flatMap.call x 91,973 ops/sec ±0.13% (98 runs sampled)
[].flatMap.call x 91,823 ops/sec ±0.13% (97 runs sampled)
cached flatMap.call x 91,395 ops/sec ±0.16% (98 runs sampled)
matFlap x 523,584 ops/sec ±0.13% (96 runs sampled)
fastest is matFlap

Array.length = 1000000
Array.prototype.flatMap.call x 92.65 ops/sec ±0.20% (79 runs sampled)
[].flatMap.call x 92.61 ops/sec ±0.13% (79 runs sampled)
cached flatMap.call x 92.61 ops/sec ±0.14% (79 runs sampled)
matFlap x 521 ops/sec ±0.21% (94 runs sampled)
fastest is matFlap
----------------------------------------

benchmark-nested.js
fn = (e) => [e,, e];

Array.length = 10
Array.prototype.flatMap.call x 295,925 ops/sec ±0.30% (96 runs sampled)
[].flatMap.call x 295,480 ops/sec ±0.30% (91 runs sampled)
cached flatMap.call x 295,079 ops/sec ±0.27% (96 runs sampled)
matFlap x 3,672,449 ops/sec ±0.37% (97 runs sampled)
fastest is matFlap

Array.length = 1000
Array.prototype.flatMap.call x 3,317 ops/sec ±0.26% (94 runs sampled)
[].flatMap.call x 3,347 ops/sec ±0.17% (99 runs sampled)
cached flatMap.call x 3,351 ops/sec ±0.23% (99 runs sampled)
matFlap x 38,034 ops/sec ±0.27% (97 runs sampled)
fastest is matFlap

Array.length = 1000000
Array.prototype.flatMap.call x 3.00 ops/sec ±0.52% (12 runs sampled)
[].flatMap.call x 2.99 ops/sec ±0.48% (12 runs sampled)
cached flatMap.call x 3.00 ops/sec ±0.38% (12 runs sampled)
matFlap x 18.55 ops/sec ±0.27% (43 runs sampled)
fastest is matFlap
----------------------------------------

benchmark-parse.js
fn = (e) => JSON.parse(e);

Array.length = 10
Array.prototype.flatMap.call x 141,944 ops/sec ±0.36% (90 runs sampled)
[].flatMap.call x 140,994 ops/sec ±0.34% (97 runs sampled)
cached flatMap.call x 142,003 ops/sec ±0.38% (95 runs sampled)
matFlap x 182,275 ops/sec ±0.25% (96 runs sampled)
fastest is matFlap

Array.length = 1000
Array.prototype.flatMap.call x 1,458 ops/sec ±0.33% (97 runs sampled)
[].flatMap.call x 1,456 ops/sec ±0.34% (96 runs sampled)
cached flatMap.call x 1,450 ops/sec ±0.42% (97 runs sampled)
matFlap x 1,839 ops/sec ±0.45% (96 runs sampled)
fastest is matFlap

Array.length = 1000000
Array.prototype.flatMap.call x 1.30 ops/sec ±1.42% (8 runs sampled)
[].flatMap.call x 1.30 ops/sec ±1.60% (8 runs sampled)
cached flatMap.call x 1.29 ops/sec ±1.32% (8 runs sampled)
matFlap x 1.56 ops/sec ±2.57% (8 runs sampled)
fastest is matFlap
----------------------------------------

benchmark-repeat.js
fn = (e) => [e, e.repeat(1), e.repeat(2)];

Array.length = 10
Array.prototype.flatMap.call x 218,711 ops/sec ±0.37% (97 runs sampled)
[].flatMap.call x 218,250 ops/sec ±0.38% (91 runs sampled)
cached flatMap.call x 219,588 ops/sec ±0.30% (95 runs sampled)
matFlap x 1,885,123 ops/sec ±0.51% (94 runs sampled)
fastest is matFlap

Array.length = 1000
Array.prototype.flatMap.call x 2,371 ops/sec ±0.29% (96 runs sampled)
[].flatMap.call x 2,349 ops/sec ±0.35% (96 runs sampled)
cached flatMap.call x 2,377 ops/sec ±0.50% (95 runs sampled)
matFlap x 19,814 ops/sec ±0.28% (97 runs sampled)
fastest is matFlap

Array.length = 1000000
Array.prototype.flatMap.call x 1.78 ops/sec ±2.85% (9 runs sampled)
[].flatMap.call x 1.79 ops/sec ±1.75% (9 runs sampled)
cached flatMap.call x 1.80 ops/sec ±1.07% (9 runs sampled)
matFlap x 6.06 ops/sec ±4.69% (19 runs sampled)
fastest is matFlap
----------------------------------------
```
