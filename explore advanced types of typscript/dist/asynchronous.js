"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "something" };
            if (data) {
                resolve(data);
            }
            else {
                reject(data);
            }
        });
    };
    // calling create promise function
    const showData = async () => {
        const data = await createPromise();
        // console.log(data);
        return data;
    };
    // console.log(showData());
    const result = showData();
    console.log(result);
    const getToDos = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        // console.log(data);
        return data;
    };
    const todoResult = getToDos();
    console.log(todoResult);
}
