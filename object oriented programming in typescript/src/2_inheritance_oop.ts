{

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;

        }

        getSleep(hour: number) {
            console.log(`${this.name} will sleep for ${hour} hour`);
        }

    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    };

    class Teacher extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will takes ${numOfClass} class`);

        }

    }

    const student = new Student("Mark", 20, "New York");
    student.getSleep(20);
    const teacher = new Teacher("Steave", 60, "Washington", "Professor");
    teacher.takeClass(4);




















}