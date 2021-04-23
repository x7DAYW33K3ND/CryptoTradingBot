const { test } = require("@jest/globals")
// const User = require("..\\LoginPage\\index.js")
const checkDupAcount = require("..\\LoginPage\\index.js");
// const createUser = require("..\\LoginPage\\index.js")
// const User = require("..\\LoginPage\\index.js")

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

// // Adding user to array for testing
// userArray.push(user0);
// userArray.push(user1);
// userArray.push(user2);
// userArray.push(user3);

var testemail = "TestName";

test('this tests the user creation', () => {
    expect(user0.getEmail()).toBe('user0')
})