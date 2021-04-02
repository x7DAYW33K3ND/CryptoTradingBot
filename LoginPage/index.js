// Sends user to mainpage without varification
function logInF(){
    window.open("..\\MainPage\\MainPage.html");
}

// Checking to make sure passwords match
function checkpsw(psw, repsw){
    if (psw == repsw){
        return true;
    }
}

// Makes sure everything in the form is loaded before submitting.
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addUser)
});