const moment = require('moment');


// , { req, location, path }
const isDate = (value) => {

    if (!value) {
        return false;
    }
    const fecha = moment(value);
    if(fecha.isValid()){
        return true
    }else {
        return false
    }


}

module.exports = {
    isDate
}


