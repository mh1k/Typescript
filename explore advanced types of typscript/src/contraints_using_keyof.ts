{
    //      constraints using keyof
    // =====================================


    //generic constraints with keyof operator 

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type onwer = "bike" | "car" | "ship";
    type onwer2 = keyof Vehicle;

    const person: keyof Vehicle = "car" // keyof vehicle bike|car|ship


    // generic function with keyof operator

    const user = {
        name: "Mr X",
        age: 25,
        address: "Bangladesh"
    }

    // console.log(user["name"]);

    function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
        return obj[key]
    }

    console.log(getPropertyValue(user, "address"));




















}