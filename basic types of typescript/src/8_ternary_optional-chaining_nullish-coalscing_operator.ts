{

// Ternary Operator
// ====================

const age = 17;

const isAdult  = age >= 18 ? "Adult" : "Not Adult";
console.log(isAdult);


// Nulliah coalescing operator
//=============================

// >> null and undefined --- decision making 

const isAuthenticated = undefined;
const result = isAuthenticated ?? "Guest";
console.log({result});




// optional chaining
// ==========================

type User = {
    name : string;
    address : {
        city : string;
        presentAddress : string;
        permanentAddress? : string;
    }
}

const user:  User ={
    name : "Akib",
    address:{
        city : "Dhaka",
        presentAddress : "Dhaka, Bangladesh"
    }
}

const permanentAddress = user?.address?.permanentAddress ?? "no permanet address";

console.log({permanentAddress});




















}