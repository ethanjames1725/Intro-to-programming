//Array of friends:
//Define the Friend Objects
var anna = {
    name: "Anna",
    age: 11,
    luckyNumbers: [2, 4, 8, 16]
};

var dave = {
    name: "Dave",
    age: 5,
    luckyNumbers: [3, 9, 40]
};

var kate = {
    name: "Kate",
    age: 9,
    luckyNumbers: [1, 2, 3]
};

//Create an Array of Friends
//The friends array now holds three elements, each of which is an object representating a friend
var friends = [anna, dave, kate];

//Accessing objects in the array:
console.log("Friend-object: ", friends[1]);

//Accessing properties within an object:
console.log("Friend-Age: ", friends[1].age);

//Accessing Nested arrays within objects:
console.log("Name: ", friends[0].name, " and Lucky-Number ", friends[0].luckyNumbers[1]);