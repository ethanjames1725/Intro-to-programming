//1. Awesome animals:
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (var i = 0; i < animals.length; i++) {
    animals[i] = "Awesome " + animals[i];
}
console.log(animals);
console.log("----------------------------------");
//Random string generator for loop:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
for (var i = 0; i < alphabet.length; i++) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);
console.log("----------------------------------");
//2. Random string generator while loop:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
var length = 0;
while (length < alphabet.length) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    length++;
}
console.log(randomString);
console.log("----------------------------------");
//3. H4ck3r sp34k
var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "o") {
        output += "0";
    } else {
        output += input[i];
    }
}
console.log("Input:", input);
console.log("Output:", output);