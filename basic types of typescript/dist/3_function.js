"use strict";
{
    //          function
    // ===============================
    function add(num1, num2) {
        return num1 + num2;
    }
    console.log(add(9, 13));
    const multiply = function (num1, num2) {
        return num1 * num2;
    };
    console.log(multiply(2, 31));
    // object function   >> if a function writes in the object it's call method
    const user = {
        name: "Hasan",
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${balance + this.balance}`;
        }
    };
    console.log((user.addBalance(2000)));
    // map function
    const numbers = [23, 21, 15, 30];
    const newNumbers = numbers.map((num) => num * num);
    console.log(newNumbers);
}
