"use strict";
{
    const add = (value1, value2) => {
        if (typeof value1 === "number" && typeof value2 === "number") {
            return value1 + value2;
        }
        else {
            return value1.toString() + value2.toString();
        }
    };
    const result = add("2", "4");
    console.log(result);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    getUser({ name: "Mr Elon", role: "Admin" });
    getUser({ name: "Mr Mark" });
}
