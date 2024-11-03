"use strict";
{
    const person = "car"; // keyof vehicle bike|car|ship
    // generic function with keyof operator
    const user = {
        name: "Mr X",
        age: 25,
        address: "Bangladesh"
    };
    // console.log(user["name"]);
    function getPropertyValue(obj, key) {
        return obj[key];
    }
    /* The line `console.log(getPropertyValue(user, "address"));` is calling a generic function named
    `getPropertyValue`. This function takes two arguments: an object `obj` of type `X` and a key
    `key` of type `Y, where Y extends keyof X`. */
    console.log(getPropertyValue(user, "address"));
}
