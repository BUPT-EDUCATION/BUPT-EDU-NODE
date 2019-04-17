const router = require('koa-router')();
const config = require('../config');
const controller = require('../controller/teacher');

router.get(`${config.urlPrefix}/teacher`, controller.ceshi);

module.exports = router;