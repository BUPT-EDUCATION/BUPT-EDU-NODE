const router = require('koa-router')();
const config = require('../config');
const controller = require('../controller/teacher');

router.get(`${config.urlPrefix}/labels`, controller.getLabels);

router.post(`${config.urlPrefix}/question`, controller.addQuestion);

router.delete(`${config.urlPrefix}/question`, controller.deleteQuestion)

module.exports = router;