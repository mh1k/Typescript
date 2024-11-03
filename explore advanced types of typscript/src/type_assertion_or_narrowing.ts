{

    // type assertion / type narrowing 
    // ===============================

    // as developer if I can declare types or understand better than typescript that's called assertion

    let anything: any;

    anything = "Mahmud Hasan";
    anything = 24;

    // (anything as string)
    (anything as number)


    const kgToGram = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`
        }
        else if (typeof value === "number") {
            return value * 1000
        }
    }

    const result = kgToGram(2) as number;
    const result2 = kgToGram("2") as string;


    console.log(result, result2);







    //    handle error 
    // ==================

type CustomError ={
    message : string
}

try {
    
} catch (error) {
    console.log((error as CustomError).message);  
}














}