// create a class
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// create a function
var userFirst = { firstName: "Ris", lastName: "yandi" };
function greeterFirst(person) {
    return "hello, my name is " + person.firstName + "" + person.lastName;
}
var userTwo = new Student("Ris", "yan", "di");
function greeterTwo() {
    return "hello, my name is " + userTwo.fullName;
}
console.log(greeterFirst(userFirst), "--> value greeterFirst");
console.log(greeterTwo(), "--> value greeterTwo");
// document.body.textContent = greeterFirst(userFirst);
// document.body.innerHTML = greeterTwo();
//# sourceMappingURL=hello.js.map