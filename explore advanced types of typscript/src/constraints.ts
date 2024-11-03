{

    // constraints 
    //==================

    // Constraints allow you to specify that a generic type parameter must meet certain criteria, such as implementing a particular interface, having a specific method, or extending a specific class.


    const addCourse = <T extends { id: number; name: string; email: string;}>(student: T) => {
        const course = "Next level web development";
        return { ...student, course }
    }

    interface StudentDetail {
        id: number;
        name: string;
        email: string;
        phone?: number
    }

    const studentAddCourse = addCourse<StudentDetail>({ id: 101, name: "Mr x", email: "mrx@mail.com", phone: 8801111 })
    const studentAddCourse2 = addCourse<StudentDetail>({ id: 102, name: "Mr y", email: "mry@mail.com" })
    const studentAddCourse3 = addCourse<StudentDetail>({ id: 103, name: "Mr z", email: "mrz@mail.com" })

    console.log(studentAddCourse);



















}