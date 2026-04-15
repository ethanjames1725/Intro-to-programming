//While loop:
console.log("-------While loop-------");
var sheepCounted = 0;
while (sheepCounted < 10) {
    console.log("I have counted:", sheepCounted, "sheep!");
    sheepCounted++;
}
console.log("Zzzzzzzzzzzzz");

//For loops:
console.log("--------For loop--------");
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have counted:", sheepCounted, "sheep!");
}
console.log("Zzzzzzzzzzzzz");

//Example:
console.log("----------------------------------");
var timeToSayHello = 3;
for (var i = 0; i < timeToSayHello; i++) {
    console.log("Hello!");
}

//For Loops with Arrays and Strings:
console.log("----------------------------------");

var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for (var i = 0; i < animals.length; i++) {
    console.log("This zoo contains a", animals[i] + ".");
}
console.log("----------------------------------");
//Accessing individual characters in a string using a for loop:
var name = "Ethan";
for (var i = 0; i < name.length; i++) {
    console.log("My name contains the letter", name[i] + ".");
}
console.log("----------------------------------");

//Other ways to use for loops:
for (var x = 2; x < 10000; x = x * 2) {
    console.log(x);
}

console.log("----------------------------------");
//Loop to print the powers of 3 under 10 000:
for (var y = 3; y < 10000; y *= 3) {
    console.log(y);
}
