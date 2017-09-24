function isBoolean(a) {
    return typeof (a) === "boolean";
}

function parseBooleanIfBoolean(a) {
    if (isBoolean) {
        return a === 'true';
    } else {
        return a;
    }
}

function isNumber(a) {
    if (a !== "") {
        return !isNaN(a);
    }
    return false;
}

function parseNumberIfNumber(a) {
    if (isNumber(a)) {
        return Number.parseInt(a)
    } else {
        return a;
    }
}

function isValidEmail(a) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(a);
}

module.exports.isBoolean = isBoolean;
module.exports.parseBooleanIfBoolean = parseBooleanIfBoolean;
module.exports.isNumber = isNumber;
module.exports.parseNumberIfNumber = parseNumberIfNumber;
module.exports.isValidEmail = isValidEmail;