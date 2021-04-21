/** Connects login page to mainPage
 * Does not require authntication and will be removed before final release
 */

// Creating user class
// Document()
var userArray = [];
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
        return this.password;
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




function logInF() {
    window.open("..\\MainPage\\MainPage.html");
    // window.location.replace("..\\MainPage\\MainPage.html");
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
    console.log('getting hit');
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var apikey = document.getElementById("api-key").value;
    var sapikey = document.getElementById("secret-api-key").value;
    var user = new User(email, password, apikey, sapikey);
    userArray.push(user);

    if (checkPass()){
        var user = {email:email, psw:password, key:apikey, skey:sapikey};
        // var user = new User(email, password, apikey, sapikey);
        userArray.push(user);
        
    }


}

function thisWasClicked() {
    console.log('This was clicked');
}


/**
 * Makes sure everything in the form is loaded before submitting.
 */
