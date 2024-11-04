"use strict";
{
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(hour) {
            console.log(`${this.name} will sleep for ${hour} hour`);
        }
    }
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    ;
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will takes ${numOfClass} class`);
        }
    }
    const student = new Student("Mark", 20, "New York");
    student.getSleep(20);
    const teacher = new Teacher("Steave", 60, "Washington", "Professor");
    teacher.takeClass(4);
}
