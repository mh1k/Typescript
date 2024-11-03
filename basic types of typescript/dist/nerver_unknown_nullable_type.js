"use strict";
{
    //     Nullable type
    //=========================
    const search = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    search(null);
    // Unknown typeof
    //================
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^1`);
        }
        else if (typeof value === "string") {
            const [nvalue, unit] = value.split(" ");
            const convertedSpeed = parseFloat(nvalue) * 1000 / 3600;
            console.log(`The speed is ${convertedSpeed} ms^1`);
        }
        else {
            console.log("wrong value");
        }
    };
    getSpeedInMeterPerSecond("320");
    // never type 
    function throwError(msg) {
        throw new Error(msg);
    }
    throwError("new error have found");
}
