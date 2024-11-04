{

    // spread operator  >> 

    //>> in array

    const friends1: string[] = ["Mr. a","Mr. b", "Mr. c","Mr. d","Mr. e", "Mr.f"];
    const friends2: string[] = ["Mr. aa","Mr. bb", "Mr. cc","Mr. dd","Mr. ee", "Mr.ff"];

    friends1.push(...friends2)

    console.log(friends1);

    //>> in object

    const team1 = {
        typescript : "Mr x",
        redux: "Mr b",
        database: "Mr y"
    }


    const team2 = {
        javascript : "Mr g",
        nextjs: "Mr k",
        react: "Mr p"
    }

    const teamList ={...team1, ...team2}
    console.log(teamList);


    // rest operator >>>>>>>>>>>

    const greetings = (...friends: string[])=>{
        friends.forEach((friend: string)=> console.log(`Hello ${friend}`))
    }

    greetings("Mr. a","Mr. b", "Mr. c","Mr. d","Mr. e", "Mr. f")
    
    

























}