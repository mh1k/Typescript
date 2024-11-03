{

    //          union types
    // ==================================


    type FrontedDev = "Junior Software Engineer" | "Junior Developer";

    const newDev: FrontedDev = "Junior Software Engineer";

    type FullstackDev = "Senior Software Engineer" | "Senior Dev";

    type Developer = FrontedDev | FullstackDev;

    const newDev2: Developer = "Senior Software Engineer";

    // in object 

    type User = {
        name: string;
        email?: string;
        gender: "Male" | "Female";
        blood: "A" | "B" | "B+" | "B-" | "AB+" | "O" | "O-" | "O+" | "A+" | "A-"
    }

    const userDetail: User = {
        name: "Shahriyar",
        email: "shahriyar@email.com",
        gender: "Male",
        blood: "B+"
    };


    // Intersection type
    //==========================

    // common property

    type Fronted = {
        skills: string[];
        designation: "Fronted Engineer";
    }
    type Backend = {
        skills: string[];
        designation2: "Backend Engineer";
    }

    type Fullstack = Fronted & Backend;

    const fullstackEngineer: Fullstack = {
        skills: ["Js", "React", "Nextjs", "Docker"],
        designation: "Fronted Engineer",
        designation2: "Backend Engineer"

    }
























}