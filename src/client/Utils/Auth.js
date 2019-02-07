import ajax from './Ajax';

export const isUserLoggedIn = () => {
  if (localStorage.getItem('jwt').length > 0) {
    return true;
  }
  return false;
};

export const signIn = (jwt, user) => {
  localStorage.setItem('jwt', jwt);
  localStorage.setItem('user', JSON.stringify(user));
};

export const signOut = () => {
  console.log('signout');
  localStorage.removeItem('jwt');
  localStorage.removeItem('user');
  location.replace('/login');
};

/**
 * Check token from server
 * Redirects to login if invalid and removes token from localstorage
 */
export const checkToken = () => {
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
};

export const getUserInfo = () => JSON.parse(localStorage.getItem('user'));

export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return 0;
  }
  return user.role;
};

export const hasRole = (role) => {
  let hasRequestedRole = false;
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return 0;
  }
  user.Roles.forEach((_role) => {
    if (_role.value === role) {
      hasRequestedRole = true;
    }
  });
  return hasRequestedRole;
};

export const getFullUserName = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return '';
  }
  return user.fname + ' ' + user.sname;
};

// module.exports.isUserLoggedIn = isUserLoggedIn;
// module.exports.getUserInfo = getUserInfo;
// module.exports.getUserRole = getUserRole;
// module.exports.signIn = signIn;
// module.exports.signOut = signOut;
// module.exports.checkToken = checkToken;
// module.exports.getFullUserName = getFullUserName;
