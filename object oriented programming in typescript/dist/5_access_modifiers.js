"use strict";
{
    //  Access Modifiers
    //  Access modifiers change the visibility of the properties and methods of a class. TypeScript provides 
    //  three access modifiers:
    // -> private
    // -> protected
    // -> public
    //  Note that TypeScript controls the access logically during compilation time, not at runtime.
    // public - default
    // ---------------
    // The public modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        ;
    }
    ;
    class StudentAccount extends BankAccount {
        test() {
            this.balance;
        }
        ;
    }
    ;
    const steaveJobs = new BankAccount(101, "Steave Jobs", 9999999);
    steaveJobs.balance = 460005;
    const jrSteave = new StudentAccount(101, "Steave Jobs", 1222);
    console.log("public", jrSteave.balance);
    console.log("public", steaveJobs.balance);
    // private
    //---------------
    //  The private modifier limits the visibility to the same class only. When you add the private modifier to a property or method, you can access that property or method within the same class. Any attempt to access private properties or methods outside the class will result in an error at compiled time.
    class BankAccount1 {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        ;
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    ;
    class StudentAccount1 extends BankAccount1 {
        test() {
            // this._balance
        }
        ;
    }
    ;
    const steaveJobs1 = new BankAccount1(101, "Steave Jobs", 9999999);
    steaveJobs1.addDeposit(40000);
    const steaveBalance = steaveJobs1.getBalance();
    console.log(steaveBalance);
    // steaveJobs1._balance = 460005; // it's not accessable 
    const jrSteave1 = new StudentAccount1(101, "Steave Jobs", 1222);
    // console.log(jrSteave1._balance); // it's not accessable 
    // console.log(steaveJobs1._balance); // it's not accessable 
    // Protected
    //----------------
    // The protected modifier allows properties and methods of a class to be accessible within the same class and subclasses.
    // When a class (child class) inherits from another class (parent class), it is a subclass of the parent class.
    // The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else.
    class BankAccount2 {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        ;
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    ;
    class StudentAccount2 extends BankAccount2 {
        test() {
            return this._balance;
        }
        ;
    }
    ;
    const steaveJobs2 = new BankAccount1(101, "Steave Jobs", 9999999);
    steaveJobs2.addDeposit(40000);
    const steaveBalance2 = steaveJobs2.getBalance();
    console.log(steaveBalance2);
    // steaveJobs2._balance = 460005; // it's not accessable 
    const jrSteave2 = new StudentAccount2(102, "Steave Jobs", 1222);
    console.log(jrSteave2.test());
    console.log(steaveBalance2);
    // console.log(jrSteave2._balance); // it's not accessable 
    // console.log(steaveJobs2._balance); // it's not accessable 
}
