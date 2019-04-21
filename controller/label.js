const labelService = require('../service/label');

exports.getLabels = async ctx => {
    ctx.body = await labelService.selectAllLabels();
}