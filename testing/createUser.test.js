const { test, expect } = require("@jest/globals")

// I just copied the functions because its easier than inporting them

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
 * Takes all info from the sign-in page and varifies
 * Then creates User object and loads it into
 * LocalStorage. 
 * @returns False if any of the feilds are empty.
 */
 function createUser(email , password, confirmPassword , apikey , sapikey) {

    // Validates there are no null fields
    if (email == '' || password == ''|| confirmPassword == '' || apikey == '' || sapikey == '') {
        alert("Please fill all fields in");
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

// Password tests

test('Tests check password funciton with 2 different password entered simulating an error', () =>{
    var password = 'mypassword'
    var confirmpassword = 'myp@ssword'
    expect(checkPass(password, confirmpassword)).toBe(false)
})

test('Tests check password funciton with 2 different password entered simulating an error', () =>{
    expect(checkPass('mypassword', 'myp@ssword')).toBe(false)
})


// Duplicate Account Tests

test('Tests check duplicate user funciton with 2 same email accounts entered simulating failure', () =>{
    expect(checkDupAcount('user0')).toBe(false)
})

test('Tests check duplicate user funciton with 2 same email accounts entered simulating failure', () =>{
    expect(checkDupAcount('john@gmail.com')).toBe(false)
})

test('Tests check duplicate user funciton with 2 same email accounts entered simulating failure', () =>{
    expect(checkDupAcount('tony@gmail.com')).toBe(false)
})

test('Tests check duplicate user funciton with different email accounts entered simulating success', () =>{
    expect(checkDupAcount('newUser@gmail.com')).toBe(true)
})

test('Tests check duplicate user funciton with different email accounts entered simulating success', () =>{
    expect(checkDupAcount('AnotehrnewUser@gmail.com')).toBe(true)
})


// Creating new users test. ! createUser() FUNCTION IS EDITED TO ALLOW TESTING WITHOUT HTML !

test('Test Creating a new user that already exists', () =>{
    expect(createUser('user0', 'pass', 'pass', 'key', 'sKey')).toBe(false)
})

test('Test Creating a new user that already exists', () =>{
    expect(createUser('john@gmail.com', 'password', 'pass', 'key', 'sKey')).toBe(false)
})

test('Test Creating a new user that already exists', () =>{
    expect(createUser('tony@gmail.com', 'password', 'pass', 'key', 'sKey')).toBe(false)
})

// make new accounts
test('Test Creating a new user that already exists', () =>{
    expect(createUser('user0', 'pass', 'pass', 'key', 'sKey')).toBe(true)
})

test('Test Creating a new user that already exists', () =>{
    expect(createUser('john@gmail.com', 'password', 'pass', 'key', 'sKey')).toBe(true)
})

test('Test Creating a new user that already exists', () =>{
    expect(createUser('tony@gmail.com', 'password', 'pass', 'key', 'sKey')).toBe(true)
})
