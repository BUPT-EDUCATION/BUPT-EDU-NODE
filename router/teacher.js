const router = require('koa-router')();
const config = require('../config');
const controller = require('../controller/teacher');

router.get(`${config.urlPrefix}/get_labels`, controller.getLabels);

module.exports = router;