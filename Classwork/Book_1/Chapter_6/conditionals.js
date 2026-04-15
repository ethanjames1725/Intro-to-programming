//if statement
var name = "Nicholas";
console.log("Hello", name);
if (name.length > 7) {
    console.log("Wow,", name, "is a really long name!");
}
console.log("----------------------------------------------------------");
console.log("Hello", name);
if (name.length > 10) {
    console.log("Wow,", name, "is a really long name!");
} else { //else statement
    console.log(name, "is not very long.");
}
console.log("----------------------------------------------------------");
//else if statement:
var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;

if (lemonChicken) {
    console.log("Great! I am having lemon chicken!");
} else if (beefWithBlackBean) {
    console.log("I am having the beef!");
} else if (sweetAndSourPork) {
    console.log("OK, I'll have the pork!");
} else {
    console.log("Well, I guess I will have the rice instead");
}
console.log("----------------------------------------------------------");
var myName = "Ethan";
var randomName = "Nicholas";
if (myName === randomName) {
    console.log("Hello me!");
} else {
    console.log("Hello stranger!");
}
console.log("----------------------------------------------------------");
var dadName = "Superman";
var momName = "Wonder Woman";
var newName = "Mario";
if (newName === dadName) {
    console.log("Hello dad!");
} else if (newName === momName) {
    console.log("Hi mom!");
} else {
    console.log("Hello stranger!");
}