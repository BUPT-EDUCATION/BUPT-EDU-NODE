const teacherDB = require('../model/teacher');

exports.ceshi = async ctx => {
    ctx.body = await teacherDB.ceshi();
}