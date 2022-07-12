import {login} from '../utils/login.js';

it ("should create user", async ()=>{
    const createUserRequest ={
        userName: "hatersgonnahate",
        email: "hatersgonnahate@byui.edu",
        password:"P@ssw0rd",
        verifyPassword:"P@ssw0rd",
        phoneNumber: "123-345-6789"
    }
})
 
it ('Should get login token', async ()=>{
    const loginRequest = {
        userName:"hatersgonnahate@byui.edu",
        password:"P@ssw0rd"
    }

    const token = await login(loginRequest);
    console.log("Token " + token)
})