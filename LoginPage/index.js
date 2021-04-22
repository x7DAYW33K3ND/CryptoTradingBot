/** Connects login page to mainPage
 * Does not require authntication and will be removed before final release
 */

// Creating user class




// var userArray = [];

var userArray = []
class User {

    constructor(email, psw, key, skey) {

        this.email = email;
        this.psw = psw;
        this.key = key;
        this.skey = skey;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.psw;
    }

    getKey(){
        return this.key;
    }

    getskey(){
        return this.skey;
    }

    setEmail(email){
        this.email = email;
    }

    setPassword(){
        this.password = this.password;
    }

}

// Creating user for testing
var user0 = new User('user0', 'pass', 'key', 'secret key');
var user1 = new User('user1', 'pass', 'key', 'secret key');
var user2 = new User('user2', 'pass', 'key', 'secret key');

// Adding user to array for testing
userArray.push(user0);
userArray.push(user1);
userArray.push(user2);


function logIn() {
    var enteredEmail = document.getElementById('loginEmail').value;
    var enteredPass = document.getElementById('loginPass').value;
    enteredEmail = enteredEmail.toString();
    enteredPass = enteredPass.toString();

    console.log('attempting login');
    // var index = 0;
    for (i = 0; i < userArray.length; i++){
        console.log("loop started");
        if(userArray[i].getEmail() == enteredEmail){
            console.log('correct email');
            if(userArray[i].getPassword() == enteredPass){
                console.log('your in');
                window.open("..\\MainPage\\MainPage.html");
            }else{
                alert("Password does not match")
            }
        }
    }
    
}


function checkPass(){
    var password = document.querySelector('.password').value,
    confirmPassword =  document.querySelector('.confirmPassword').value;
        if(password != confirmPassword){
            alert("Passwords don't match try again.");
            return false;
        }
        else {
            return true;
        }
}

function checkDupAcount(newEmail) {
    
    for (i = 0; i < userArray.length; i++){
        if(userArray[i].getEmail() == newEmail){
            alert("Account with Email already exists");
            return false
        }
    }
    return true;
}


/** This funtion takes in all user info from the sign up page
 *  and creates a user object from the peramiters
 * 
 * @param {string} email users Email
 * @param {string} pws users Password
 * @param {string} api users API key
 * @param {string} sapi users Private API Key
 */


// What you need to do is get these before the funtion is called
function createUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var apikey = document.getElementById("api-key").value;
    var sapikey = document.getElementById("secret-api-key").value;
    
    // Validates there are no null fields
    if(email == '' || password == '' || apikey == '' || sapikey == ''){
        alert("Please fill all fields in");
        return;
    }

    var user = new User(email, password, apikey, sapikey);

    // Makes sure passwords are the same and there is no other created account with the same email
    if (checkPass() && checkDupAcount(email)){
        userArray.push(user);
        console.log('User Created');
    }


}

// function two() {
//     createUser();
//     savetoFile();
// }
function thisWasClicked() {
    console.log('This was clicked');
}

// function savetoFile(){
//     const fs = require('fs');

//     var data = JSON.stringify(userArray, null, 2);

//     fs.writeFileSync('users.json', data, (err) => {
//         if (err){
//             throw err;
//         }
//         console.log("Saved.");
//     });

// }

// function loadFile(){
//     const fs = require('fs');

//     fs.readFileSync('users.json', 'utf-8', (err,data) => {
//         if (err){
//             throw err;
//         } else {
//             try{
//                 const file = JSON.parse(data);
//                 userArray.users.push(file);
//             } catch (error){
//                 console.error(error);
//             }
//         }
//     });
// }
/**
 * Makes sure everything in the form is loaded before submitting.
 */
