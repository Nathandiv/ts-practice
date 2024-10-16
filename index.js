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
var person = /** @class */ (function () {
    function person(message, age, gender) {
        this.Name = message;
        this.age = age;
        this.gender = gender;
    }
    person.prototype.myName = function () {
        return "I love eating ".concat(this.Name);
    };
    person.prototype.Age = function () {
        return "I am ".concat(this.age);
    };
    person.prototype.Gender = function () {
        return "I am ".concat(this.gender);
    };
    return person;
}());
var Person = new person("Nathan", 30, "Male");
console.log(Person.myName());
console.log(Person.Age());
console.log(Person.Gender());
