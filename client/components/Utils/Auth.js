import utils from './Utils';
import ajax from './Ajax';

function isUserLoggedIn() {
    if (localStorage.getItem('jwt').length > 0) {
        return true;
    }
    return false;
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
            .then(data => {
                if (!data.success) {
                    signOut();
                }
            })
    }
}

function getUserInfo() {
    return JSON.parse(localStorage.getItem("user"));
}

function getUserRole() {
    return JSON.parse(localStorage.getItem("user")).role;
}

function signIn(jwt, user) {
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("user", JSON.stringify(user));
}

function signOut() {
    console.log("signout")
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    location.replace('/login');
}

module.exports.isUserLoggedIn = isUserLoggedIn;
module.exports.getUserInfo = getUserInfo;
module.exports.getUserRole = getUserRole;
module.exports.signIn = signIn;
module.exports.signOut = signOut;
module.exports.checkToken = checkToken;