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
    ajax.sendGet('/isValidToken')
        .then(data => {
            if (!data.success) {
                signOut();
                location.replace('/login');
            }
        })
}

function getUserInfo() {

}

function getUserRole() {

}

function signIn(jwt) {
    localStorage.setItem("jwt", jwt);
}

function signOut() {
    localStorage.removeItem("jwt");
}

module.exports.isUserLoggedIn = isUserLoggedIn;
module.exports.getUserInfo = getUserInfo;
module.exports.getUserRole = getUserRole;
module.exports.signIn = signIn;
module.exports.signOut = signOut;
module.exports.checkToken = checkToken;