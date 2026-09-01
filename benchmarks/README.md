# Benchmarks

Speed comparison: baseline (previously published npm release) vs the optimized `@bejibun/cors` in this repo.

## Running

```bash
# Run all benchmarks (installs baseline from npm first)
bun run bench

# Or run individually (after install-deps)
bun run install-deps
bun run coldstart
bun run throughput
```

## Cold Start

Measures import time by spawning fresh OS processes. Two metrics:

- **Full process time** — spawn → exit (includes Bun boot time)
- **Import + first init** — measured inside the process, isolates the package's own cost

<!-- BENCHMARK:COLDSTART:START -->

|                             | baseline | optimized | speedup   |
| --------------------------- | -------- | --------- | --------- |
| Full process (spawn → exit) | 19.7ms   | 18.9ms    | **1.05x** |
| Import → first init         | 8.8ms    | 4.8ms     | **1.84x** |

<!-- BENCHMARK:COLDSTART:END -->

## Throughput

Raw call speed for `Cors.init` — the hot path invoked per request. 200,000 iterations, output silenced.

<!-- BENCHMARK:THROUGHPUT:START -->

| Method      | baseline (0.1.17) | optimized | speedup     | baseline ops/s | optimized ops/s |
| ----------- | ----------------- | --------- | ----------- | -------------- | --------------- |
| `Cors.init` | 520.3ms           | 1.4ms     | **365.36x** | 384,425/s      | 140,454,370/s   |

<!-- BENCHMARK:THROUGHPUT:END -->
