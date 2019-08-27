const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

var port = 4400
app.listen(port, ()=>{
    console.log("Server is Running at port", port)
});