{

    //   Getter and Setter
    // =======================

    // Use TypeScript getters/setters to control the access properties of a class.
    // The getter/setters are also known as accessors/mutators.

    class BankAccount1 {
        id: number;
        name: string;
        private _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;

        };

        set addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }
        get balance() {
            return this._balance
        }

    };


    class StudentAccount1 extends BankAccount1 {
        test() {
            // this._balance
        };
    };

    const steaveJobs1 = new BankAccount1(101, "Steave Jobs", 9999999);
    steaveJobs1.addDeposit = 50000; // setter-> use like a property
    const steaveBalance = steaveJobs1.balance; // getter -> use like a property
    console.log(steaveBalance);

    // steaveJobs1._balance = 460005; // it's not accessable 
    const jrSteave1 = new StudentAccount1(101, "Steave Jobs", 1222);
    // console.log(jrSteave1._balance); // it's not accessable 
    // console.log(steaveJobs1._balance); // it's not accessable 




























}