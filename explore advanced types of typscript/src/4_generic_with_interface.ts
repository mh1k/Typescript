{

    //        interface generic 
    // =================================

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;

    }

    type SmartWatch = {
        brand: string;
        model: string;
        display: string;
        feature?: string;
    }

    interface SmartWatch1 {
        brand: string;
        model: string;
        display: string;
        feature?: string;
    }

    type Bike = {
        brand: string;
        model: string;
    }

    interface Bike1 {
        brand: string;
        model: string;
    }



    const developer1: Developer<SmartWatch1, Bike1> = {
        name: "jhankar mahmbub",
        computer: {
            brand: "lenovo",
            model: "thinkpad",
            releaseYear: 2024,
        },
        smartWatch: {
            brand: "apple",
            model: "series 9",
            display: "amoled",
            feature: "Heart track"
        },
        bike: {
            brand: "kawsaki",
            model: "nija h2r"
        }

    }

    const developer2: Developer<SmartWatch> = {
        name: "Mark",
        computer: {
            brand: "asus",
            model: "vivobook",
            releaseYear: 2021,
        },
        smartWatch: {
            brand: "samsung",
            model: "galazy watch",
            display: "amoled"
        }

    }




























}