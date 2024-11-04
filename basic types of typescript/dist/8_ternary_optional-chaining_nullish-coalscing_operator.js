"use strict";
var _a, _b;
{
    // Ternary Operator
    // ====================
    const age = 17;
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log(isAdult);
    // Nulliah coalescing operator
    //=============================
    // >> null and undefined --- decision making 
    const isAuthenticated = undefined;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log({ result });
    const user = {
        name: "Akib",
        address: {
            city: "Dhaka",
            presentAddress: "Dhaka, Bangladesh"
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "no permanet address";
    console.log({ permanentAddress });
}
