import express from "express";
import modules from "./../index.js";
const app = express();
const port = 3000;

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

app.get("/fib", async (req, res) => {
  const start = Date.now();
  const result = modules.fib(40);
  const ms = Date.now() - start;
  res.status(200).json({ result: ms });
  console.log(`${req.method} ${req.url} - ${ms}`);
});

app.get("/getFile", async (req, res) => {
  const start = Date.now();
  //const result = modules.readWrite();
  const ms = Date.now() - start;
  res.status(200).json({ result: result });
  console.log(`${req.method} ${req.url} - ${ms}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
