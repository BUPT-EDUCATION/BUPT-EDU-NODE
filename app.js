const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const labelRouter = require('./router/label');
const questionRouter = require('./router/question');

const config = require('./config');
const loggerAsync = require('./middleware/logger')

const app = new Koa();

app.use(bodyParser());
app.use(loggerAsync());
app.use(cors({
    origin: () => '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(labelRouter.routes());
app.use(questionRouter.routes());

app.listen(config.port);

console.log('[demo] start-quick is starting at port 3000');
console.log();