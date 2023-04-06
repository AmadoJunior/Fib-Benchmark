import Koa from "koa";
import Router from "@koa/router";
const app = new Koa();
const router = new Router();

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

router.get(
  "/fib",
  async (ctx, next) => {
    await next();
    const rt = ctx.response.get("X-Response-Time");
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  },
  async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.body = JSON.stringify({ result: ms });
    ctx.set("X-Response-Time", `${ms}ms`);
  },
  async (ctx) => {
    const result = fib(40);
  }
);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002);
