/* 

primitive types                              non primitive types
___________________________________________________________________

-> number                                   -> Array
-> string                                   -> tuple
-> boolean                                  -> object
-> null                                     -> function
-> undefined
-> symbol


*/

// Implicit data type :  implicit data type is a feature that allows Ts to automatically determine
//                       the data type of varible at time of its initialisation.

// Explicit data type :  writing out the type its easier to read and more intertinal.
//                      e.g -  :string, :number, :boolean, :undefined, :null


let data = 2323; // Implicit automatically figure out the data type - not recommended
let data1: number = 2323; // Explicit data - recommended

let userName: string = "Mahmudul Hasan";
let isActice: boolean = true;
let x: undefined = undefined;
let y: null = null;
let newArray: string[] = ["Hasan", "Saied", "Irfan"];
let newNumbers: number[] = [22, 56, 78, 90, 98];
let z: number;           //empty variable   



//                      tuple 
// _______________________________________________

// it's maintian the types of value order

let mixData: [number, string, number, boolean] = [12, "typescript", 22, true];

console.log(mixData);













