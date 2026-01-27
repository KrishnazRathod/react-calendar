// Promise Combinators (ES2020+)
// A) Promise.all([promises])
// B) Promise.allSettled([promises])
// C) Promise.race([promises])
// D) Promise.any([promises])
//
// Tip: Run this file with Quokka to see outputs.

// Helper: create promises that resolve/reject after a delay
const resolveAfter = (label, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(`${label} ✅`), ms));

const rejectAfter = (label, ms) =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`${label} ❌`)), ms)
  );

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper: run an exercise and print title
async function exercise(title, fn) {
  console.log(`\n================ EXERCISE: ${title} ================`);
  await fn();
}

async function run() {
  console.log("\nA) Promise.all");
  // - Behavior: waits for ALL to resolve
  // - Result: resolves to array of results (in the same order as input)
  // - Failure: rejects immediately if ANY promise rejects
  try {
    const results = await Promise.all([
      resolveAfter("user", 300),
      resolveAfter("settings", 150),
      resolveAfter("notifications", 200),
    ]);
    console.log("all results:", results);
  } catch (err) {
    console.log("all error:", err.message);
  }

  // Uncomment to see the "fail fast" behavior:
  try {
    await Promise.all([resolveAfter("ok", 200), rejectAfter("boom", 100)]);
  } catch (err) {
    console.log("all error:", err.message);
  }

  console.log("\nB) Promise.allSettled");
  // - Behavior: waits for ALL to finish (resolve or reject)
  // - Result: array of { status: "fulfilled", value } OR { status: "rejected", reason }
  // - Use when you want partial success without failing the whole operation
  const settled = await Promise.allSettled([
    resolveAfter("task1", 120),
    rejectAfter("task2", 80),
    resolveAfter("task3", 50),
  ]);
  console.log("allSettled:", settled);

  console.log("\nC) Promise.race");
  // - Behavior: first promise to SETTLE wins (resolve OR reject)
  // - Use case: timeouts (race request against a timer)
  const request = resolveAfter("request", 200);
  const timeout = rejectAfter("timeout", 100);
  try {
    const winner = await Promise.race([request, timeout]);
    console.log("race winner:", winner);
  } catch (err) {
    console.log("race error:", err.message);
  }

  console.log("\nD) Promise.any");
  // - Behavior: first promise to RESOLVE wins (ignores rejections)
  // - Failure: rejects only if ALL promises reject (AggregateError)
  try {
    const firstSuccess = await Promise.any([
      rejectAfter("mirror-1", 60),
      resolveAfter("mirror-2", 120),
      resolveAfter("mirror-3", 200),
    ]);
    console.log("any winner:", firstSuccess);
  } catch (err) {
    console.log("any error:", err.name, err.errors?.map((e) => e.message));
  }

  // Uncomment to see "all failed" behavior:
  try {
    await Promise.any([rejectAfter("a", 50), rejectAfter("b", 70)]);
  } catch (err) {
    console.log("any all-failed:", err.name); // AggregateError
  }

  // --------------------------------------------------
  // PRACTICE EXERCISES (edit the TODO lines)
  // --------------------------------------------------

  await exercise("1) Promise.all keeps input order", async () => {
    // TODO: Predict the output order (should match array order, not timing)
    const results = await Promise.all([
      resolveAfter("first", 200),
      resolveAfter("second", 50),
      resolveAfter("third", 100),
    ]);
    // Even though timings are 200, 50, 100 ms, Promise.all
    // returns results in the SAME order as the input array.
    console.log("Expected order: first, second, third");
    console.log("Actual order:", results.map((x) => x.split(" ")[0]).join(", "));
  });

  await exercise("2) Promise.all fails fast", async () => {
    // TODO: Which error prints, and does the slow promise still run in background?
    try {
      await Promise.all([
        resolveAfter("slow-success", 300),
        rejectAfter("fast-fail", 50),
      ]);
    } catch (err) {
      console.log("Caught:", err.message);
    }
    await sleep(350);
    console.log("Note: Promise.all rejects early, but other async work can still finish.");
  });

  await exercise("3) Promise.allSettled: count fulfilled vs rejected", async () => {
    const results = await Promise.allSettled([
      resolveAfter("ok1", 40),
      rejectAfter("bad1", 20),
      rejectAfter("bad2", 10),
      resolveAfter("ok2", 30),
    ]);

    // TODO: compute totals from results
    const fulfilled = results.filter((r) => r.status === "fulfilled").length;
    const rejected = results.filter((r) => r.status === "rejected").length;

    console.log({ fulfilled, rejected }); // { fulfilled: 2, rejected: 2 }
    console.log("Raw:", results);
  });

  await exercise("4) Promise.race timeout wrapper", async () => {
    // TODO: Implement withTimeout(promise, ms)
    const withTimeout = (promise, ms) =>
      Promise.race([
        promise,
        rejectAfter(`timeout after ${ms}ms`, ms),
      ]);

    try {
      const res = await withTimeout(resolveAfter("network", 200), 100);
      console.log("Result:", res); // Would log if network wins
    } catch (err) {
      console.log("Error:", err.message); // Here: timeout after 100ms ❌
    }
  });

  await exercise("5) Promise.any: first success wins", async () => {
    // TODO: Predict which mirror wins here
    const winner = await Promise.any([
      rejectAfter("m1", 20),
      resolveAfter("m2", 80),
      resolveAfter("m3", 40),
    ]);
    // m3 resolves first at 40ms, so it wins
    console.log("Winner:", winner);
  });
}

run();