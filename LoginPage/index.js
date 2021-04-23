

class User {
    /** This constructor uses user inputted details and creates a User object.
     * 
     * @param {string} email The user's email address
     * @param {string} psw The user's password
     * @param {string} key The user's API-Key
     * @param {string} skey The user's Secret API key
     */
    constructor(email, psw, key, skey) {

        this.email = email;
        this.psw = psw;
        this.key = key;
        this.skey = skey;
    }

    /** This getter returns the email of a User object.
    * 
    * @return {string} email The user's email
    */
    getEmail() {
        return this.email;
    }

    /** This getter returns the password of a User object.
     * 
     * @return {string} psw The user's password
     */
    getPassword() {
        return this.psw;
    }

    /** This getter returns the API-Key of a User object.
     * 
     * @return {string} key The user's API-Key
     */
    getKey() {
        return this.key;
    }

    /** This getter returns the secret API-Key of a User object.
    * 
    * @return {string} skey The user's secret API-Key
    */
    getskey() {
        return this.skey;
    }

}

/**
 * Login Function, Takes the user to the main pages once varified.
 * Checks User data from LocalStorage and compares it against
 * what the user entered.
 */
function logIn() {
    var enteredEmail = document.getElementById('loginEmail').value;
    var enteredPass = document.getElementById('loginPass').value;

    var stringAccnt = localStorage.getItem(enteredEmail);
    var account = JSON.parse(stringAccnt);
    console.log(account);
    if (account.email != null) {

        if (account.psw == enteredPass) {
            window.open("..\\MainPage\\MainPage.html"); // Closes Login page and brings user to mainPage.
            window.close("ui.html");
        } else {
            alert('wrong password please try again');
        }
    } else {
        alert('Account not found');
    }
}




/**
 * True if passwords match, False if passwords don't match.
 * @param {String} password users intended password
 * @param {String} confirmPassword users confirmation of intented password
 * @returns True if passwords match, False if passwords don't match.
 */
function checkPass(password, confirmPassword) {
    
    if (password != confirmPassword) {
        alert("Passwords don't match try again.");
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
        alert("Account with Email already exists");
        return false;
    } else {
        return true;
    }
}



/**
 * Takes all info from the sign-in page and varifies
 * Then creates User object and loads it into
 * LocalStorage. 
 * @returns False if any of the feilds are empty.
 */
function createUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.querySelector('.confirmPassword').value;
    var apikey = document.getElementById("api-key").value;
    var sapikey = document.getElementById("secret-api-key").value;

    // Validates there are no null fields
    if (email == '' || password == ''|| confirmPassword == '' || apikey == '' || sapikey == '') {
        alert("Please fill all fields in");
        return false;
    }

    var user = new User(email, password, apikey, sapikey); // Creates user from info given\
    if (checkPass(password, cconfirmPassword) && checkDupAcount(email)) {
        var userToString = JSON.stringify(user);
        localStorage.setItem(email, userToString);
        return true;
    }
}

/** 
 * This function logs user out and redirects them to the Login Page.
 */
function logOut() {
    window.open("..\\LoginPage\\ui.html");
    window.close("MainPage.html");
}



/** 
 * This function clears LocalStorage of users.
 */
function clearLocalStorage() {
    localStorage.clear();
}


module.exports = User;
// module.exports = createUser();
// module.exports = userArray;
module.exports = checkDupAcount();