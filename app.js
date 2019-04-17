const Koa = require('koa');
const bodyParser = require('koa-bodyparser')

const config = require('./config');
const teacherRouter = require('./router/teacher');

const app = new Koa();

app.use(bodyParser());

app.use(teacherRouter.routes());

app.listen(config.port);

console.log('[demo] start-quick is starting at port 3000');