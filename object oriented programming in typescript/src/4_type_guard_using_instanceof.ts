{

    // instanceof type guard
    //=============================

    // instanceof type guards are a way of narrowing types using their constructor function.


    class Animal {
        name : string;
        species : string;

        constructor(name: string, species :string) {
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log("I'm making sound"); 
        }
    }

    class Cat extends Animal {
        constructor(name: string, species :string){
            super(name, species);
        }
         makeMeow(){
            console.log("I'm meowing meow meow :)"); 
        }
    }

    class Dog extends Animal {
        constructor(name: string, species :string){
            super(name, species);
        }
        makebark(){
            console.log("I'm barking.."); 
        }
    }


    const getAnimal =(animal: Animal)=>{
        if (animal instanceof Cat) {
            animal.makeMeow();
        }
        else if (animal instanceof Dog) {
            animal.makebark();
        }
        else{
            animal.makeSound();
        }
    }


    // we can use function to handle smart way
    const isCat =(animal: Animal): animal  is Cat =>{
        return animal instanceof Cat;
    }
    const isDog =(animal: Animal): animal  is Dog =>{
        return animal instanceof Dog;
    }

    const getAnimal2 =(animal: Animal)=>{
        if (isCat(animal)) {
            animal.makeMeow();
        }
        else if (isDog(animal)) {
            animal.makebark();
        }
        else{
            animal.makeSound();
        }
    }




    const cat = new Cat ("kitty", "cat");
    const dog = new Dog ("rock","dog");
    getAnimal(cat);
    getAnimal(dog);
    getAnimal2(cat);
    getAnimal2(dog);























}