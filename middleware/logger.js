const moment = require('moment');

const log = (ctx) => {
  const curTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  console.log(curTime, ctx.method, ctx.header.host + ctx.url);
  if (ctx.method == 'POST') {
    console.log(ctx.request.body);
  }
  console.log();
}

module.exports = () => {
  return async (ctx, next) => {
    log(ctx);
    await next();
  }
}