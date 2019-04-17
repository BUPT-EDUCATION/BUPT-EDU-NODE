const teacherService = require('../service/teacher');

exports.getLabels = async ctx => {
    ctx.body = await teacherService.selectAllLabels();
}