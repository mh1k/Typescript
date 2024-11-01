
// object       >>> reference type
//========================================


const user: {

company: "Programming Hero";  // literal type
readonly company2?: string;  // unchangeable
firstName: string;
middleName?: string;  // >>?<< optional type -- either string or undefined
lastname: string;
isMarried: boolean;
age: number;

} = {

company : "Programming Hero",
firstName: "Mahmudul",
lastname: "Hasan",
isMarried:false,
age: 25

}

console.log(user.isMarried);
