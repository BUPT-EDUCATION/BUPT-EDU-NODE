const teacherDB = require('../model/teacher');

exports.selectAllLabels = async () => {
    let fatherLabels = await teacherDB.selectFatherLabels();
    return await Promise.all(fatherLabels.map(async (father) => {
        let childLabels = await teacherDB.selectChildLabels(father.label_id);
        return {
            father_label: father,
            child_labels: childLabels
        };
    }));
}

exports.addQuestion = async (data) => {
    const { question_title, question_content, question_type, labels, answers } = data;
    const question_id = await teacherDB.insertQuestion({ question_title, question_content, question_type });
    await teacherDB.insertAnswers({ question_id, answers });
    await teacherDB.insertQuestionLabelRelation({ question_id, labels });
}

exports.deleteQuestion = async (data) => {
    const { question_id } = data;
}