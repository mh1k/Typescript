{
    //              type alias in typescript
    // ====================================================

    //object alias
    type Student = {
        name: string;
        age: number;
        contactNo?: number;
        gender: string;
        address: string

    }

    const student1: Student = {
        name: "Adan",
        age: 18,
        contactNo: +880180000000,
        gender: "Male",
        address: "Bangladesh"
    }

    const student2: Student = {
        name: "Hasib",
        age: 15,
        gender: "Male",
        address: "Bangladesh"
    }




    // string alias

    type UserName = string;

    const userName: UserName = "Mahmud";


    // function alias

    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2;
    console.log(add(2,65));
    
























}