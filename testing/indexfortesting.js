

// Creating users for testing
var user0 = {email: 'user0', psw: 'pass', key: 'key', skey: 'sKey'}
var user1 = {email: 'john@gmail.com', psw: 'password', key: 'key', skey: 'sKey'}
var user2 = {email: 'tony@gmail.com', psw: 'password123', key: 'key', skey: 'sKey'}

// Loading into LocalStorage
localStorage.setItem(user0.email, JSON.stringify(user0))
localStorage.setItem(user1.email, JSON.stringify(user1))
localStorage.setItem(user2.email, JSON.stringify(user2))

/**
 * True if passwords match, False if passwords don't match.
 * @param {String} password users intended password
 * @param {String} confirmPassword users confirmation of intented password
 * @returns True if passwords match, False if passwords don't match.
 */
 function checkPass(password, confirmPassword) {
    
    if (password != confirmPassword) {
        return false;
    }
    else {
        return true;
    }
}


/**
 * Checks if there is an account in local storage with same email.
 * @param {String} newEmail Users inputed email.
 * @returns True if email is unique, False if email is already linked with an account
 */
function checkDupAcount(newEmail) {
    if (localStorage.getItem(newEmail) != null) {
        return false;
    } else {
        return true;
    }
}

/**
 *  Takes all info from the sign-in page and varifies
 * Then creates User object and loads it into
 * LocalStorage. 
 * @param {String} email Users Email
 * @param {String} password Users Password
 * @param {String} confirmPassword Users confirmed password
 * @param {String} apikey API Key
 * @param {String} sapikey Secret API Key
 * @returns True if user is created, False if error 
 */
 function createUser(email, password, confirmPassword , apikey , sapikey) {

    // Validates there are no null fields
    if (email == '' || password == ''|| confirmPassword == '' || apikey == '' || sapikey == '') {
        return false;
    }

    var user = {email: email, psw: password, key: apikey, skey: sapikey} // Creates user from info given
    if (checkPass(password, confirmPassword) && checkDupAcount(email)) {
        var userToString = JSON.stringify(user);
        localStorage.setItem(email, userToString);
        return true;
    }else{
        return false;
    }
}

/**
 * Varifies and logs Users into Mainpage
 * @param {String} enteredEmail Email entered in login
 * @param {String} enteredPass Password entered in login
 * @returns True if login success, False if login fails
 */
function logIn(enteredEmail, enteredPass) {
    // var stringAccnt = localStorage.getItem(enteredEmail);
    // var account = JSON.parse(stringAccnt);
    if (localStorage.getItem(enteredEmail) != null) {

        if (JSON.parse(localStorage.getItem(enteredEmail)).psw == enteredPass) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


module.exports = {
    dubAcount: checkDupAcount,
    checkPass: checkPass,
    createuser: createUser,
    logIn: logIn

};