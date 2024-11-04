"use strict";
{
    // type assertion / type narrowing 
    // ===============================
    // as developer if I can declare types or understand better than typescript that's called assertion
    let anything;
    anything = "Mahmud Hasan";
    anything = 24;
    // (anything as string)
    anything;
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result = kgToGram(2);
    const result2 = kgToGram("2");
    console.log(result, result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
