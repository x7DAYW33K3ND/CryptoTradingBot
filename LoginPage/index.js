/** Connects login page to mainPage
 * Does not require authntication and will be removed before final release
 */
function logInF() {
    window.open("..\\MainPage\\MainPage.html");
}


/** Minimizes user error when creating account password
 * 
 * @param {string} psw users password
 * @param {string} repsw users repeat password
 * @returns {boolean} if passwords match
 */
function checkpsw(psw, repsw) {
    if (psw == repsw) {
        return true;
    }
}


/** This funtion takes in all user info from the sign up page
 *  and creates a user object from the peramiters
 * 
 * @param {string} email users Email
 * @param {string} pws users Password
 * @param {string} api users API key
 * @param {string} sapi users Private API Key
 */
function createUser(email, pws, api, sapi) {

    // skeleton of funtion
}


/**
 * Makes sure everything in the form is loaded before submitting.
 */

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addUser)
});