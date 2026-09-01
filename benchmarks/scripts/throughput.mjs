/**
 * Throughput benchmark.
 *
 * Measures raw call speed for Cors.init on both baseline (npm 0.1.17) and optimized
 * local version. Simulates repeated per-request invocations (the hot path for CORS).
 *
 * Run: bun run scripts/throughput.mjs
 */
import {printTable} from "./table-format.mjs";
import {updateReadmeSection} from "./readme-writer.mjs";

const ITERATIONS = 200_000;
const WARMUP = 5_000;

const {default: BaselineCors} = await import("@bejibun-baseline/cors");
const {default: OptimizedCors} = await import("../../src/facades/Cors");

function bench(fn) {
    for (let i = 0; i < WARMUP; i++) fn();
    const t0 = performance.now();
    for (let i = 0; i < ITERATIONS; i++) fn();
    const t1 = performance.now();
    return t1 - t0;
}

function fmt(ms) {
    return ms < 1 ? `${(ms * 1000).toFixed(0)}\u00B5s` : `${ms.toFixed(1)}ms`;
}

function sp(b, o) {
    const r = b / o;
    return r >= 1.05 ? `${r.toFixed(2)}x` : r <= 0.95 ? `${r.toFixed(2)}x` : "~1.0x";
}

function ops(ms) {
    return Math.round(ITERATIONS / (ms / 1000)).toLocaleString() + "/s";
}

const bMs = bench(() => BaselineCors.init);
const oMs = bench(() => OptimizedCors.init);

printTable({
    title: "THROUGHPUT BENCHMARK",
    subtitle: `${ITERATIONS.toLocaleString()} calls each, ${WARMUP.toLocaleString()} warmup calls`,
    headers: ["Method", "Baseline (0.1.17)", "Optimized", "Speedup", "Optimized ops/s"],
    rows: [{cells: ["Cors.init", fmt(bMs), fmt(oMs), sp(bMs, oMs), ops(oMs)]}]
});

const table = [
    "| Method | baseline (0.1.17) | optimized | speedup | baseline ops/s | optimized ops/s |",
    "|---|---|---|---|---|---|",
    `| \`Cors.init\` | ${bMs.toFixed(1)}ms | ${oMs.toFixed(1)}ms | **${(bMs / oMs).toFixed(2)}x** | ${ops(bMs)} | ${ops(oMs)} |`
].join("\n");

updateReadmeSection("THROUGHPUT", table);
