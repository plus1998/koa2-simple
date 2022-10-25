const Koa = require("koa");
const BodyParser = require("koa-bodyparser");

// config
const { serverPort } = require("./config");
// router
const router = require("./router");

const app = new Koa();
const bodyparser = new BodyParser();

// middleware
app.use(bodyparser);
app.use(router.routes());

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(serverPort, () => {
  console.log(`Server listening port ${serverPort}.`);
});
