function isBoolean(a) {
  return typeof (a) === 'boolean';
}

function parseBoolean(a) {
  return a === 'true';
}

function isNumber(a) {
  if (a !== '') {
    return !isNaN(a);
  }
  return false;
}

function parseNumberIfNumber(a) {
  if (isNumber(a)) {
    return Number.parseInt(a, 10);
  }
  return a;
}

function isValidEmail(a) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(a);
}

module.exports.isBoolean = isBoolean;
module.exports.parseBoolean = parseBoolean;
module.exports.isNumber = isNumber;
module.exports.parseNumberIfNumber = parseNumberIfNumber;
module.exports.isValidEmail = isValidEmail;
