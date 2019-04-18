const teacherService = require('../service/teacher');

exports.getLabels = async ctx => {
    ctx.body = await teacherService.selectAllLabels();
}

exports.addQuestion = async ctx => {
    await teacherService.addQuestion(ctx.request.body);
    ctx.body = {message: '插入成功'};
}