"use strict";
{
    //          Destructuring 
    // ==================================
    //  >> object destructuring
    const user = {
        id: 322,
        name: {
            firstName: "a",
            middleName: "b",
            lastName: "c",
        },
        contact: "0160000000"
    };
    // in destructuring can not declare the data types , ts is auomatically detect the data type 
    const { contact, name: { firstName: userName } } = user; // : username is alias
    console.log(contact, userName);
    // >> Array destructuring 
    const friends = ["Mr. a", "Mr. b", "Mr. c", "Mr. d", "Mr. e", "Mr. f"];
    // const [frind1, frind2, bestfriend, frind4, frind5, frind6] = friends
    // const [,,bestfriend, frind4, frind5, frind6] = friends
    const [, , bestfriend, ...rest] = friends;
    console.log(bestfriend, rest);
}
