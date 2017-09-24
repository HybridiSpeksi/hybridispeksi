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
    console.log("checktoken");
    ajax.sendGet('/isValidToken')
        .then(data => {
            if (!data.success) {
                signOut();
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
    console.log("signout")
    localStorage.removeItem("jwt");
    location.replace('/login');
}

module.exports.isUserLoggedIn = isUserLoggedIn;
module.exports.getUserInfo = getUserInfo;
module.exports.getUserRole = getUserRole;
module.exports.signIn = signIn;
module.exports.signOut = signOut;
module.exports.checkToken = checkToken;