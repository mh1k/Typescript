"use strict";
{
    //      statics in OOP
    // ==========================
    // Unlike an instance property, a static property is shared among all instances of a class.
    // To declare a static property, you use the static keyword. To access a static property, you use the className.propertyName syntax.
    // Static properties and methods are shared by all instances of a class.
    // Use the static keyword before a property or a method to make it static.
    class Counter {
        static increment() {
            // return (this.count = this.count + 1);
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            // return (this.count = this.count - 1);
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    const intance = new Counter();
    const intance1 = new Counter();
    const intance2 = new Counter();
    // console.log(intance.increment());
    // console.log(intance1.decrement());
    // console.log(intance2.decrement());
    console.log(Counter.increment());
    console.log(Counter.decrement());
    console.log(Counter.decrement());
}
