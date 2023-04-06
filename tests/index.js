import assert from "assert";
import { fib } from "../build/debug.js";
assert.strictEqual(fib(3), 2);
console.log("ok");
