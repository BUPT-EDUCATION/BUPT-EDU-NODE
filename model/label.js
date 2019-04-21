const query = require('../mysql/db');

exports.selectFatherLabels = async () => {
    let sql = ` SELECT label_id, label_name 
                FROM base_label 
                WHERE label_type = 0`;
    return await query(sql);
}

exports.selectChildLabels = async (labelId) => {
    let sql = ` SELECT label_id, label_name 
                FROM base_label, relation_label 
                WHERE relation_label.father_label_id = ${labelId}
                AND base_label.label_id = relation_label.child_label_id`;
    return await query(sql);
}