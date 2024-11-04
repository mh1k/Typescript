{

    // type guard
    // typeof -> type guard

    type AlphaNeumeric = string | number;

    const add = (value1: AlphaNeumeric, value2: AlphaNeumeric): AlphaNeumeric => {
        if (typeof value1 === "number" && typeof value2 === "number") {
            return value1 + value2
        } else {
            return value1.toString() + value2.toString();
        }
    }

    const result = add("2", "4");
    console.log(result);


    //-----------------------------------
    // in guard    > it's work on object
    //-----------------------------------


    type NormalUser = {
        name : string;
    }

    type AdminUser = {
        name: string;
        role : "Admin";
    }

    const getUser = (user: NormalUser | AdminUser)=>{
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
            
        } else {
            console.log(`My name is ${user.name}`);
            
        }
    }

    getUser({name:"Mr Elon", role :"Admin"})
    getUser({name:"Mr Mark"})





















}