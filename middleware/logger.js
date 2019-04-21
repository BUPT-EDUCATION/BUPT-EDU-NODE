const timeUtil = require('../util/time');

const log = (ctx) => {
  const curTime = timeUtil.getCurTime();
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