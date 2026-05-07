var favouriteFoods = [];
favouriteFoods = ["broccoli", "eggplant", "tacos", "mushrooms"];

var myArray = [5, "Hi there", true];
console.log(myArray[0]);

var firstName = "Ethan";
var middleName = "James";
var lastName = "Smith";

var scientist = [firstName, middleName, lastName];
console.log(scientist);

var people = ["Ethan", "Orlin", "Bhabha", "Kantse"];
console.log(people);

people[0] = "Georgie";
console.log(people);

var people = ["Mary", "Bobby", "Judie", "Eddie", "Herbie", "Tony", "Bobby"];
var otherPeople = ["Teddy", "Cathy", "G-berg", "Georgie"];
document.getElementById("peopleIKnow").innerHTML = people.toString();
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
people = people.concat(otherPeople);
console.log(people);

console.log(people.lastIndexOf("Bobby"));
console.log(people.indexOf("Judie"));

people = people.join(", ");
document.getElementById("peopleIKnow").innerHTML = people;

var person = people.pop();
console.log(person);

people.push("Teddy");
console.log(people);

people.reverse();
console.log(people);

console.log(people.shift());
console.log(people);

people.unshift("Ethan");
console.log(people);

console.log(people.sort());

people.splice(1,0,"Matthew");
console.log(people);