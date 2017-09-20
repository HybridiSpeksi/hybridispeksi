import utils from './Utils';

function isUserLoggedIn() {
    
}

function getUserInfo() {

}

function getUserRole() {

}

function signIn(jwt) {
    localStorage.setItem("jwt", jwt);
}

function signOut() {
    localStorage.removeItem("jwt")
}

module.exports.isUserLoggedIn = isUserLoggedIn;
module.exports.getUserInfo = getUserInfo;
module.exports.getUserRole = getUserRole;
module.exports.signIn = signIn;
module.exports.signOut = signOut;