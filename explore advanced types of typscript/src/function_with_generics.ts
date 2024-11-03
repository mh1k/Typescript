{

    //          function with generics
    // =============================================

    const createArrGenetic = <T>(value: T): T[] => {
        return [value];
    }

    type User = {
        id: number;
        name: string;
    }
    const result = createArrGenetic<string>("Bangladesh")
    // const result2 = createArrGenetic<{ id: number; name: string }>({ id: 101, name: "Mr x" })
    const result2 = createArrGenetic<User>({ id: 101, name: "Mr x" })


    console.log(result);
    console.log(result2);


    // Tuple generic 
    // =================

    const createArrTuple = <T, Q>(value1: T, value2: Q): [T, Q] => {
        return [value1, value2];
    }


    const result3 = createArrTuple<string, number>("Bangladesh", +880)
    const result4 = createArrTuple<string, { continent: string }>("Bangladesh", { continent: "Asia" })


    console.log(result3);
    console.log(result4);




    const addCourse = <T>(student: T) => {
        const course = "Next level web development";
        return { ...student, course }
    }

    interface StudentDetail {
        name: string;
        email: string
    }

    const studentAddCourse = addCourse<StudentDetail>({ name: "Mr x", email: "mrx@mail.com" })

    console.log(studentAddCourse);
    





























}