import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import loader from "@assemblyscript/loader";
const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmModule = loader.instantiateSync(
  fs.readFileSync(__dirname + "/build/debug.wasm"),
  {}
);
export default wasmModule.exports;
