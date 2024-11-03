{

    //              generic type 
    //======================================

    // as we need we can create type and reuse it dynamic way

    type GenericArray<T> = Array<T>; // dynamic way decalared generic type

    // const roll : number[] = [1,2,3,4,5];
    // const roll : Array<number> = [1,2,3,4,5]; 
    const roll: GenericArray<number> = [1, 2, 3, 4, 5]; // dynamically

    // const teachers : string[]= ["Mr x", "Mr y","Mr m"];
    // const teachers : Array<string>= ["Mr x", "Mr y","Mr m"];
    const teachers: GenericArray<string> = ["Mr x", "Mr y", "Mr m"];

    // const booleanArr : boolean[]= [true, false, true];
    // const booleanArr : Array<boolean>= [true, false, true];
    const booleanArr: GenericArray<boolean> = [true, false, true];


    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: "Jhankar",
            age: 30
        },
        {
            name: "Bill gates",
            age: 60
        },
    ]


    //     Generic Tuple  
    // ========================

    type GenericTuple<X, Y, Z> = [X, Y, Z?];

    const persons: GenericTuple<string, string, number> = ["Bill gates", "steave Jobs", 2];
    const personId: GenericTuple<string, { email: string; city: string }, number> = ["Bill gates", {
        email: "email@mail.com",
        city: "New york"
    }
    ];























}