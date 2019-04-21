const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const config = require('./config');
const loggerAsync = require('./middleware/logger-async')
const teacherRouter = require('./router/teacher');

const app = new Koa();

app.use(loggerAsync());
app.use(bodyParser());
app.use(cors({
    origin: (ctx) => {
        return "*"; 
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(teacherRouter.routes());

app.listen(config.port);

console.log('[demo] start-quick is starting at port 3000');