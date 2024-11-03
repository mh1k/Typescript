{

    //          mapped types
    //===========================

    // A mapped type is a generic type which uses a union of PropertyKey s (frequently created via a keyof ) to iterate through keys to create a type.


    const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
    // const arrOfstrings : string[] = ["1","2","3","4","5"];

    const arrOfstrings: string[] = arrOfNumbers.map((num) => num.toString())
    console.log(arrOfstrings);



    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber["height"] // look up type

    /**
     * The type `AreaString` maps each key in `AreaNumber` to a string value.
     * @property {string} [: string] - The code you provided is defining a type `AreaString` that maps
     * keys from the `AreaNumber` type to strings. The keys are determined by the `keyof AreaNumber`
     * expression, which retrieves all keys from the `AreaNumber` type.
     **/


    type AreaString = {
        // [key in "height"| "width"] : string
        [key in keyof AreaNumber]: string;
    }


    // generic map 


    // T=> {height : string; width : number}
    // key => T["width"]
    type AreaString1<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaString1<{ height: string; width: number; }> = { height: "100", width: 50 }





















}