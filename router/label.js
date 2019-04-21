const router = require('koa-router')();
const config = require('../config');
const controller = require('../controller/label');

router.get(`${config.urlPrefix}/labels`, controller.getLabels);

module.exports = router;