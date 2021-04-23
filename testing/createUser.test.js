const { test, expect } = require("@jest/globals")
const myModule = require('./indexfortesting')
const checkPass = myModule.checkPass;
const checkDupAcount = myModule.dubAcount;
const createUser = myModule.createuser;
const logIn = myModule.logIn;

// const {checkPass, checkDupAcount, createUser} = require('./indexfortesting')
// const myModule = require('./indexfortesting')

// I just copied the functions because its easier than inporting them

// Creating users for testing
var user0 = {email: 'user0', psw: 'pass', key: 'key', skey: 'sKey'}
var user1 = {email: 'john@gmail.com', psw: 'password', key: 'key', skey: 'sKey'}
var user2 = {email: 'tony@gmail.com', psw: 'password123', key: 'key', skey: 'sKey'}

// Loading into LocalStorage
localStorage.setItem(user0.email, JSON.stringify(user0))
localStorage.setItem(user1.email, JSON.stringify(user1))
localStorage.setItem(user2.email, JSON.stringify(user2))




// Password testsclear

test('Tests check password funciton with 2 different password entered simulating an error', () =>{
    var password = 'mypassword'
    var confirmpassword = 'myp@ssword'
    expect(checkPass(password, confirmpassword)).toBe(false)
})

test('Tests check password funciton with 2 different password entered simulating an error', () =>{
    expect(checkPass('mypassword', 'myp@ssword')).toBe(false)
})

test('Tests creating password with matching confirm password', () =>{
    expect(checkPass('password', 'password')).toBe(true)
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
test('Testing creating unique user', () =>{
    expect(createUser('newuser', 'pass', 'pass', 'key', 'sKey')).toBe(true)
})

test('Testing creating unique user', () =>{
    expect(createUser('Owen@gmail.com', 'password', 'password', 'key', 'sKey')).toBe(true)
})

test('Testing creating unique user', () =>{
    expect(createUser('Aaron@gmail.com', 'password', 'password', 'key', 'sKey')).toBe(true)
})

// Making accounts with confirm password error
test('Testing incorrect confirm password', () =>{
    expect(createUser('newuser', 'pass', 'passerror', 'key', 'sKey')).toBe(false)
})

test('Testing incorrect confirm password', () =>{
    expect(createUser('Owen@gmail.com', 'password', 'passworderror', 'key', 'sKey')).toBe(false)
})

test('Testing incorrect confirm password', () =>{
    expect(createUser('Aaron@gmail.com', 'password', 'passworderror', 'key', 'sKey')).toBe(false)
})

test('Creating new account with null values', () =>{
    expect(createUser('john', '', '', '', '')).toBe(false)
})
test('Creating new account with null values', () =>{
    expect(createUser('john', 'password', '', '', '')).toBe(false)
})
test('Creating new account with null values', () =>{
    expect(createUser('john', 'password', 'password', '', '')).toBe(false)
})
test('Creating new account with null values', () =>{
    expect(createUser('john', 'password', 'password', 'key', '')).toBe(false)
})


// Testing user login

test('Logging in with correct credentials', () =>{
    expect(logIn('user0', 'pass')).toBe(true)
})

test('Logging in with correct credentials', () =>{
    expect(logIn('john@gmail.com', 'password')).toBe(true)
})

test('Logging in with correct credentials', () =>{
    expect(logIn('tony@gmail.com', 'password123')).toBe(true)
})

test('Logging in without an account and no password', () =>{
    expect(logIn('userNoAccount', '')).toBe(false)
})

test('Logging with just a password', () =>{
    expect(logIn('', 'pass')).toBe(false)
})

test('Logging in without entering an account and no password', () =>{
    expect(logIn('', '')).toBe(false)
})

test('Trying with right account but wrong password', () =>{
    expect(logIn('user0', 'epass')).toBe(false)
})

test('Trying with right account but wrong password', () =>{
    expect(logIn('john@mail.com', 'epass')).toBe(false)
})

test('Trying with right account but wrong password', () =>{
    expect(logIn('tony@mail.com', 'epass')).toBe(false)
})

// Creating a new user and loging in


