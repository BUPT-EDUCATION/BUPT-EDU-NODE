const query = require('../mysql/db');

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

exports.deleteAnswers = async (data) => {
    const { question_id } = data;
    let sql = ` DELETE FROM base_answer
                WHERE question_id = ${question_id}`;
    return await query(sql);
}

exports.updateAnswers = async (data) => {
    const { question_id, answers } = data;
    await this.deleteAnswers({ question_id });
    await this.insertAnswers({ question_id, answers });
}

exports.selectAnswers = async (data) => {
    const { question_id } = data;
    let sql = ` SELECT answer_content, answer_type
                FROM base_answer
                WHERE question_id = ${question_id}`;
    return await query(sql);
}