const moment = require('moment');

exports.getCurTime = async () => {
    return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
}