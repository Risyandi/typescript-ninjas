// create a class
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// create a interface
interface Person {
    firstName: string;
    lastName: string;
}

// create a function
let userFirst = { firstName: "Ris", lastName: "yandi" }; 
function greeterFirst(person: Person) {
    return "hello, my name is " + person.firstName + "" + person.lastName;
}

let userTwo = new Student("Ris", "yan", "di");
function greeterTwo() {
    return "hello, my name is " + userTwo.fullName;
}

console.log(greeterFirst(userFirst), "--> value greeterFirst");
console.log(greeterTwo(), "--> value greeterTwo");
// document.body.textContent = greeterFirst(userFirst);
// document.body.innerHTML = greeterTwo();