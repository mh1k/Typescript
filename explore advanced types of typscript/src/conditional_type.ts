{

    // Conditional type

    type Value1 = number;
    type Value2 = number;

    type X = Value1 extends number ? true : false;

    type Y = Value1 extends null ?  true : Value2 extends undefined ? undefined : any;


    
    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type CheckVehicle <T> = T extends keyof Vehicle ? true : false;
    type HasVehicle = CheckVehicle<"ship">;
















}