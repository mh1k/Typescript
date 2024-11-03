{

    //   interface
    // ==============              
    //                       >> Interfaces are similar to type aliases, except they only apply to object types

    type User1 = {          //type alias
        name: string;
        age: number;
    }

    interface User2 {       // interface
        name: string;
        age: number;
    }


    // const user: User2 = {
    //     name: "Jhanker",
    //     age: 30
    // }

    // using intersection for extend data

    type UserRole = User1 & { role: string } // type alias
    interface UserRole2 extends User2 { role: string } // interface
    interface UserRole3 extends User1 { role: string } // interface extends with type alias


    const user: UserRole = {
        name: "Jhanker",
        age: 30,
        role: "Software Engineer"
    }
    console.log(user.role);



    // array
    //=================

    type Roll = number[];           // type alias
    interface Roll2 {               // interface
        [index: number]: number;
    }
    const roll: Roll = [1, 2, 3, 4];
    const roll2: Roll2 = [1, 2, 3, 4];
    console.log(roll[2], roll2[3]);

    // function
    //=============

    type Add = (num1: number, num2: number) => number;  // type alias

    interface Add2 {                                    // interface
        (num1: number, num2: number): number;
    }


    const add: Add = (num1, num2) => num1 + num2;
    const add2: Add2 = (num1, num2) => num1 + num2;
    console.log(add(16, 19));
    console.log(add2(16, 26));
































}