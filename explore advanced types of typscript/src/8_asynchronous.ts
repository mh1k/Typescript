{

    // Asynhronous typescript
    //=========================


    // promise

    // simulate

    type Something = {
        something: string
    }

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" };
            if (data) {
                resolve(data);
            }
            else {
                reject(data)
            }
        })
    }

    // calling create promise function

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        // console.log(data);
        return data;

    }

    // console.log(showData());
    const result = showData();
    console.log(result);


    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getToDos = async (): Promise<Todo> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json()
        // console.log(data);
        return data

    }

    const todoResult = getToDos()

    console.log(todoResult);
































}

export { };
