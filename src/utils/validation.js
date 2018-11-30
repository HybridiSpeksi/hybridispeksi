module.exports = {
  isEmptyOrNull: (args) => {
    if (args) {
      return false;
    }
    return true;
  },

  isValidEmail: (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  },

  isNumber: arg => !isNaN(arg),

  isTooLong(str, max) {
    if (str.length > max) {
      return true;
    }
    return false;
  },
};
