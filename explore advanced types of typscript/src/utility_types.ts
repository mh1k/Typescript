{

    //         pick type
    // =======================

    // Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo?: string;
    }


    type NameAge = Pick<Person, "name" | "age">

    //          omit
    // ======================

    // its behave opposite of pick

    // Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

    type ContactInfo = Omit<Person, "name" | "age">;

    //          required
    //=============================

    // Constructs a type consisting of all properties of Type set to required. 

    type PersonRequired = Required<Person>;


    //             partial
    //===============================
    // Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
    // its behave opposite of required

    type PersonPartial = Partial<Person>

    //        readonly
    //=========================
    // Constructs a type with all properties of Type set to optional. This utility will return a type that          represents all subsets of a given type. 

    type PersonReadonly = Readonly<Person>;

    //      record type
    //============================

    // Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type. 

    // type Myobj = {
    //     a: string;
    //     b: string;
    // }

    type Myobj = Record<string, string>


    const obj1: Myobj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }

    const EmptyObj: Record<string, unknown> = {}


























}