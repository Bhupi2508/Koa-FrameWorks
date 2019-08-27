const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log("start", start);
  await next();
  const ms = Date.now() - start;
  console.log("ms", ms);
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hiii';
});

var port = 4500
app.listen(port, ()=>{  
    console.log("Server is Running at port", port)
});

app.on('error', err => {
    log.error('server error', err)
  });

  