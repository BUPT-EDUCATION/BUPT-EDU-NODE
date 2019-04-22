const questionService = require('../service/question');

exports.addQuestion = async ctx => {
    await questionService.addQuestion(ctx.request.body);
    ctx.body = { message: '插入成功' };
}

exports.deleteQuestion = async ctx => {
    await questionService.deleteQuestion(ctx.request.query);
    ctx.body = { message: '删除成功' };
}

exports.editQuestion = async ctx => {
    await questionService.editQuestion(ctx.request.body);
    ctx.body = { message: '修改成功' };
}

exports.getQuestion = async ctx => {
    ctx.body = await questionService.getQuestion(ctx.request.query);
}

exports.getQuestionList = async ctx => {
    ctx.body = await questionService.getQuestionList(ctx.request.query);
}