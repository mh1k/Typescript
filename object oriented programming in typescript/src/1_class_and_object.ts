{

    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        // constructor(name: string, species: string, sound: string) {
        //     this.name = name
        //     this.species = species
        //     this.sound = sound
        // }

        // parameter properties
        constructor( public name: string, public species: string, public sound: string){

        }

        makeSound() {
            console.log(`The ${this.name}'s sound ${this.sound}`);

        }

    };


    const cat = new Animal("Kitty", "cat", "meow meow");
    cat.makeSound();



















}