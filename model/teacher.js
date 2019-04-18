const query = require('../mysql/async-db');

exports.selectFatherLabels = async () => {
    let sql = ` SELECT label_id, label_name 
                FROM base_label 
                WHERE label_type = 0  `;
    return await query(sql);
}

exports.selectChildLabels = async (labelId) => {
    let sql = ` SELECT label_id, label_name 
                FROM base_label, relation_label 
                WHERE relation_label.father_label_id = ${labelId}
                AND base_label.label_id = relation_label.child_label_id`;
    return await query(sql);
}

exports.insertQuestion = async (data) => {
    const { question_title, question_content, question_type } = data;
    let sql = ` INSERT INTO base_question
                (question_title, question_content, question_type) VALUES
                ('${question_title}', '${question_content}', ${question_type})`;
    await query(sql);
    sql = `SELECT LAST_INSERT_ID()`;
    const res = await query(sql)
    return res[0]['LAST_INSERT_ID()'];
}

exports.insertAnswers = async (data) => {
    const { question_id, answers } = data;
    let sql = ` INSERT INTO base_answer
                (answer_content, answer_type, question_id) VALUES`;
    answers.forEach((answer, index) => {
        sql += `('${answer.answer_content}', ${answer.answer_type}, ${question_id})`;
        index == answers.length - 1 ? null : sql += ',';
    })
    return await query(sql);
}

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