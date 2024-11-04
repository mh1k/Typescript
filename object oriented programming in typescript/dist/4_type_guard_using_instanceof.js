"use strict";
{
    // instanceof type guard
    //=============================
    // instanceof type guards are a way of narrowing types using their constructor function.
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I'm making sound");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeow() {
            console.log("I'm meowing meow meow :)");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makebark() {
            console.log("I'm barking..");
        }
    }
    const getAnimal = (animal) => {
        if (animal instanceof Cat) {
            animal.makeMeow();
        }
        else if (animal instanceof Dog) {
            animal.makebark();
        }
        else {
            animal.makeSound();
        }
    };
    // we can use function to handle smart way
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const getAnimal2 = (animal) => {
        if (isCat(animal)) {
            animal.makeMeow();
        }
        else if (isDog(animal)) {
            animal.makebark();
        }
        else {
            animal.makeSound();
        }
    };
    const cat = new Cat("kitty", "cat");
    const dog = new Dog("rock", "dog");
    getAnimal(cat);
    getAnimal(dog);
    getAnimal2(cat);
    getAnimal2(dog);
}
