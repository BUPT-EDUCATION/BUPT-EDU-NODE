const questionDB = require('../model/question');
const answerDB = require('../model/answer');
const relationQuestionLabelDB = require('../model/relationQuestionLabel');

exports.addQuestion = async (data) => {
    const { user_id, question_title, question_content, question_type, labels, answers } = data;
    const question_id = await questionDB.insertQuestion({ user_id, question_title, question_content, question_type });
    await answerDB.insertAnswers({ question_id, answers });
    await relationQuestionLabelDB.insertQuestionLabelRelation({ question_id, labels });
}

exports.deleteQuestion = async (data) => {
    const { question_id } = data;
    await relationQuestionLabelDB.deleteQuestionLabelRelation({ question_id });
    await answerDB.deleteAnswers({ question_id });
    await questionDB.deleteQuestion({ question_id });
}

exports.editQuestion = async (data) => {
    const { question_id, question_title, question_content, question_type, labels, answers } = data;
    await questionDB.updateQuestion({ question_id, question_title, question_content, question_type });
    await answerDB.updateAnswers({ question_id, answers });
    await relationQuestionLabelDB.updateQuestionLabelRelation({ question_id, labels });
}

exports.getQuestion = async (data) => {
    const { question_id } = data;
    return Promise.all([questionDB.selectQuestion({ question_id }), 
                        answerDB.selectAnswers({ question_id }), 
                        relationQuestionLabelDB.selectQuestionLabelRelation({ question_id })]).then(data => {
        const [ question, answers, labels ] = data;
        return {
            ...question[0],
            answers,
            labels: labels.map((item) => item.label_id)
        }
    });
}

exports.getQuestionList = async (data) => {
    const { user_id } = data;
    return await questionDB.selectQuestions({ user_id });
}
