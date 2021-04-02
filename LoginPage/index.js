// Sends user to mainpage without varification
function logInF(){
    window.open("..\\MainPage\\MainPage.html");
}

function checkpsw(psw, repsw){
    if (psw == repsw){
        return true;
    }
}