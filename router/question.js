const router = require('koa-router')();
const config = require('../config');
const controller = require('../controller/question');

router.get(`${config.urlPrefix}/question`, controller.getQuestion);

router.post(`${config.urlPrefix}/question`, controller.addQuestion);

router.put(`${config.urlPrefix}/question`, controller.editQuestion);

router.delete(`${config.urlPrefix}/question`, controller.deleteQuestion);

router.get(`${config.urlPrefix}/questionList`, controller.getQuestionList);

module.exports = router;