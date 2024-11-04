"use strict";
{
    //          mapped types
    //===========================
    // A mapped type is a generic type which uses a union of PropertyKey s (frequently created via a keyof ) to iterate through keys to create a type.
    const arrOfNumbers = [1, 2, 3, 4, 5];
    // const arrOfstrings : string[] = ["1","2","3","4","5"];
    const arrOfstrings = arrOfNumbers.map((num) => num.toString());
    console.log(arrOfstrings);
    const area1 = { height: "100", width: 50 };
}
