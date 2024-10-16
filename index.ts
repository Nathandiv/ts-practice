// class Greeter {
//     greeting: string;
//     constructor(message:string){
//         this.greeting = message;
//     }


// Greeter(){
//     return "hello"+ this.greeting
// }

// }

// let greeter = new Greeter("Name")

// console.log(greeter.Greeter());

class person {

    Name: string;
    age:number;
    gender:string;
    constructor(message:string,age:number,gender:string){
        this.Name = message;
        this.age = age;
        this.gender = gender;

    }


myName(){
    return `I love eating ${this.Name}`
}

Age(){
    return `I am ${this.age}`
}

Gender(){
    return `I am ${this.gender}`
}

}

let Person = new person("Nathan" ,30,"Male");
console.log(Person.myName());
console.log(Person.Age());
console.log(Person.Gender());


