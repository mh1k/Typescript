"use strict";
{
    //          function with generics
    // =============================================
    const createArrGenetic = (value) => {
        return [value];
    };
    const result = createArrGenetic("Bangladesh");
    // const result2 = createArrGenetic<{ id: number; name: string }>({ id: 101, name: "Mr x" })
    const result2 = createArrGenetic({ id: 101, name: "Mr x" });
    console.log(result);
    console.log(result2);
    // Tuple generic 
    // =================
    const createArrTuple = (value1, value2) => {
        return [value1, value2];
    };
    const result3 = createArrTuple("Bangladesh", +880);
    const result4 = createArrTuple("Bangladesh", { continent: "Asia" });
    console.log(result3);
    console.log(result4);
    const addCourse = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const studentAddCourse = addCourse({ name: "Mr x", email: "mrx@mail.com" });
    console.log(studentAddCourse);
}
