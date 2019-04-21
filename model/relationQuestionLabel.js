const query = require('../mysql/db');

exports.insertQuestionLabelRelation = async (data) => {
    const { question_id, labels } = data;
    let sql = ` INSERT INTO relation_question_label
                (question_id, label_id) VALUES`;
    labels.forEach((label_id, index) => {
        sql += `(${question_id}, ${label_id})`;
        index == labels.length - 1 ? null : sql += ',';
    })
    return await query(sql);
}

exports.deleteQuestionLabelRelation = async (data) => {
    const { question_id } = data;
    let sql = ` DELETE FROM relation_question_label
                WHERE question_id = ${question_id}`;
    return await query(sql);
}

exports.updateQuestionLabelRelation = async (data) => {
    const { question_id, labels } = data;
    await this.deleteQuestionLabelRelation({ question_id });
    await this.insertQuestionLabelRelation({ question_id, labels });
}

exports.selectQuestionLabelRelation = async (data) => {
    const { question_id } = data;
    let sql = ` SELECT label_id
                FROM relation_question_label
                WHERE question_id = ${question_id}`;
    return await query(sql);
}

