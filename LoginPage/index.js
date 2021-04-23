
// Array of all users, gets cached to LocalStorage
var userArray = []

class User {
    /** Constructor for User Class
     * 
     * @param {*} email Users Email
     * @param {*} psw Users Password
     * @param {*} key Users API-Key
     * @param {*} skey Users Secret API key
     */
    constructor(email, psw, key, skey) {

        this.email = email;
        this.psw = psw;
        this.key = key;
        this.skey = skey;
    }

    // Getters
    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.psw;
    }

    getKey() {
        return this.key;
    }

    getskey() {
        return this.skey;
    }

}

// Creating user for testing
var user0 = new User('user0', 'pass', 'key', 'secret key');
var user1 = new User('user1', 'pass', 'key', 'secret key');
var user2 = new User('user2', 'pass', 'key', 'secret key');
var user3 = new User('user3', 'pass', 'key', 'secret key');

// Adding user to array for testing
userArray.push(user0);
userArray.push(user1);
userArray.push(user2);
userArray.push(user3);


// 
function logIn() {
    var enteredEmail = document.getElementById('loginEmail').value;
    var enteredPass = document.getElementById('loginPass').value;
    for (i = 0; i < userArray.length; i++) { // Loops through userArray.
        if (userArray[i].getEmail() == enteredEmail) { // Checks email.
            if (userArray[i].getPassword() == enteredPass) { // Checks password.
                window.open("..\\MainPage\\MainPage.html"); // Closes Login page and brings user to mainPage.
                window.close("ui.html");
            } else {
                alert("Password does not match");
            }
        }
    }

}

// Checks to make sure user enters correct password.
function checkPass() {
    var password = document.querySelector('.password').value,
        confirmPassword = document.querySelector('.confirmPassword').value;
    if (password != confirmPassword) {
        alert("Passwords don't match try again.");
        return false;
    }
    else {
        return true;
    }
}

/**
 * Checks new users email with pre-existing acount emails.
 * @param {String} newEmail New accounts email.
 * @returns True if passwords are unique, False if passwords are not.
 */
function checkDupAcount(newEmail) {

    for (i = 0; i < userArray.length; i++) {
        if (userArray[i].getEmail() == newEmail) {
            alert("Account with Email already exists");
            return false
        }
    }
    return true;
}


/** 
 * This funtion takes in all user info from the sign up page
 *  and creates a user object from the peramiters
*/
function createUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var apikey = document.getElementById("api-key").value;
    var sapikey = document.getElementById("secret-api-key").value;

    // Validates there are no null fields
    if (email == '' || password == '' || apikey == '' || sapikey == '') {
        alert("Please fill all fields in");
        return;
    }

    var user = new User(email, password, apikey, sapikey); // Creates user from info given

    // Makes sure passwords are the same and there is no other created account with the same email.
    if (checkPass() && checkDupAcount(email)) {
        userArray.push(user); // Pushes user to the userArray after varification
        console.log('User Created');
    }

}

// Logs out of Mainpage, back to Login page.
function logOut() {
    window.open("..\\LoginPage\\ui.html");
    window.close("MainPage.html");
}


// Loads users from userArray into LocalStorage.
function loadusers() {
    for (i = 0; i < userArray.length; i++) {
        var userToString = JSON.stringify(userArray[i]);
        console.log(userToString);
        localStorage.setItem(userArray[i].getEmail(), userToString);
        console.log(localStorage.length);
    }
}

// Clears LocalStorage.
function clearLocalStorage() {
    localStorage.clear();
}

function Load(params) {

}

loadusers();
clearLocalStorage();