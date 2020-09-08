# Benchmarks

```
npm run benchmark
```

Tests against Arrays of size:

- `10`
- `1,000`
- `1,000,000`

## Results

TL;DR - Matflap is always faster (against arrays of size 10, 1,000, and 1,000,000)

```
> matflap@0.0.2 benchmark /home/m/code/node/matflap
> node ./benchmark/benchmark.js && node ./benchmark/benchmark-fn.js && node ./benchmark/benchmark-parse.js

benchmark.js
fn = (e) => e;

Array.prototype.flatMap.call x 757,487 ops/sec ±0.33% (97 runs sampled)
[].flatMap.call x 747,227 ops/sec ±0.39% (95 runs sampled)
cached flatMap.call x 751,077 ops/sec ±0.30% (94 runs sampled)
matFlap x 24,729,089 ops/sec ±1.43% (91 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 9,039 ops/sec ±0.32% (99 runs sampled)
[].flatMap.call x 9,052 ops/sec ±0.25% (97 runs sampled)
cached flatMap.call x 9,014 ops/sec ±0.35% (99 runs sampled)
matFlap x 227,471 ops/sec ±0.93% (93 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 8.02 ops/sec ±1.61% (24 runs sampled)
[].flatMap.call x 7.99 ops/sec ±1.11% (24 runs sampled)
cached flatMap.call x 8.00 ops/sec ±1.08% (24 runs sampled)
matFlap x 56.86 ops/sec ±3.63% (60 runs sampled)
fastest is matFlap

benchmark-fn.js
fn = (e) => [e, e.repeat(1), e.repeat(2)];

Array.prototype.flatMap.call x 226,530 ops/sec ±0.29% (97 runs sampled)
[].flatMap.call x 226,560 ops/sec ±0.26% (99 runs sampled)
cached flatMap.call x 226,465 ops/sec ±0.33% (95 runs sampled)
matFlap x 1,952,080 ops/sec ±1.46% (95 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 2,464 ops/sec ±0.28% (97 runs sampled)
[].flatMap.call x 2,461 ops/sec ±0.26% (95 runs sampled)
cached flatMap.call x 2,484 ops/sec ±0.42% (96 runs sampled)
matFlap x 20,833 ops/sec ±0.27% (96 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 1.92 ops/sec ±2.49% (9 runs sampled)
[].flatMap.call x 1.93 ops/sec ±1.44% (9 runs sampled)
cached flatMap.call x 1.93 ops/sec ±1.58% (9 runs sampled)
matFlap x 6.57 ops/sec ±3.50% (21 runs sampled)
fastest is matFlap

benchmark-parse.js
fn = (e) => JSON.parse(e);

Array.prototype.flatMap.call x 249,180 ops/sec ±0.28% (97 runs sampled)
[].flatMap.call x 246,951 ops/sec ±0.55% (97 runs sampled)
cached flatMap.call x 247,180 ops/sec ±0.63% (91 runs sampled)
matFlap x 424,950 ops/sec ±0.37% (97 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 2,742 ops/sec ±0.25% (99 runs sampled)
[].flatMap.call x 2,727 ops/sec ±0.38% (98 runs sampled)
cached flatMap.call x 2,687 ops/sec ±0.70% (96 runs sampled)
matFlap x 4,073 ops/sec ±1.02% (91 runs sampled)
fastest is matFlap

Array.prototype.flatMap.call x 2.26 ops/sec ±0.73% (10 runs sampled)
[].flatMap.call x 2.24 ops/sec ±1.31% (10 runs sampled)
cached flatMap.call x 2.20 ops/sec ±1.57% (10 runs sampled)
matFlap x 3.22 ops/sec ±1.33% (12 runs sampled)
fastest is matFlap
```
