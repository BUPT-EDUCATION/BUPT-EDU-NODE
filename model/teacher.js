const query = require('../mysql/async-db');

exports.ceshi = async () => {
    let sql = 'SELECT * FROM base_label';
    return await query(sql);
}