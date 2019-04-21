const labelDB = require('../model/label');

exports.selectAllLabels = async () => {
    let fatherLabels = await labelDB.selectFatherLabels();
    return await Promise.all(fatherLabels.map(async (father) => {
        let childLabels = await labelDB.selectChildLabels(father.label_id);
        return {
            father_label: father,
            child_labels: childLabels
        };
    }));
}