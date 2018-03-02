import ajax from './Ajax';

function isUserLoggedIn() {
  if (localStorage.getItem('jwt').length > 0) {
    return true;
  }
  return false;
}

function signIn(jwt, user) {
  localStorage.setItem('jwt', jwt);
  localStorage.setItem('user', JSON.stringify(user));
}

function signOut() {
  console.log('signout');
  localStorage.removeItem('jwt');
  localStorage.removeItem('user');
  location.replace('/login');
}

/**
 * Check token from server
 * Redirects to login if invalid and removes token from localstorage
 */
function checkToken() {
  if (!isUserLoggedIn) {
    signOut();
  } else {
    ajax.sendGet('/isValidToken')
      .then((data) => {
        if (!data.success) {
          signOut();
        }
      });
  }
}

function getUserInfo() {
  return JSON.parse(localStorage.getItem('user'));
}

function getUserRole() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return 0;
  }
  return user.role;
}

function getFullUserName() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return '';
  }
  return user.fname + ' ' + user.sname;
}

module.exports.isUserLoggedIn = isUserLoggedIn;
module.exports.getUserInfo = getUserInfo;
module.exports.getUserRole = getUserRole;
module.exports.signIn = signIn;
module.exports.signOut = signOut;
module.exports.checkToken = checkToken;
module.exports.getFullUserName = getFullUserName;
