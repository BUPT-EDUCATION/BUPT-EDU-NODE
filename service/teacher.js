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