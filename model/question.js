const query = require('../mysql/db');

exports.insertQuestion = async (data) => {
    const { question_title, question_content, question_type } = data;
    let sql = ` INSERT INTO base_question
                (question_title, question_content, question_type) VALUES
                ('${question_title}', '${question_content}', ${question_type})`;
    return (await query(sql)).insertId;
}

exports.deleteQuestion = async (data) => {
    const { question_id } = data;
    let sql = ` DELETE FROM base_question
                WHERE question_id = ${question_id}`;
    return await query(sql);
}

exports.updateQuestion = async (data) => {
    const { question_id, question_title, question_content, question_type } = data;
    let sql = ` UPDATE base_question
                SET question_title = '${question_title}', question_content = '${question_content}', question_type = ${question_type}
                WHERE question_id = ${question_id}`;
    return await query(sql);
}

exports.selectQuestion = async (data) => {
    const { question_id } = data;
    let sql = ` SELECT question_title, question_content, question_type
                FROM base_question
                WHERE question_id = ${question_id}`;
    return await query(sql);
}




