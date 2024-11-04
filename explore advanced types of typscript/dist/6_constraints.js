"use strict";
{
    // constraints 
    //==================
    // Constraints allow you to specify that a generic type parameter must meet certain criteria, such as implementing a particular interface, having a specific method, or extending a specific class.
    const addCourse = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const studentAddCourse = addCourse({ id: 101, name: "Mr x", email: "mrx@mail.com", phone: 8801111 });
    const studentAddCourse2 = addCourse({ id: 102, name: "Mr y", email: "mry@mail.com" });
    const studentAddCourse3 = addCourse({ id: 103, name: "Mr z", email: "mrz@mail.com" });
    console.log(studentAddCourse);
}
