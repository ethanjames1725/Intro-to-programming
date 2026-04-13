//1. Scorekeeper create object 'scores':
var scores = {
    Alice: 0,
    Bob: 0,
    Charlie: 0
};

scores.Alice += 10;

scores["Bob"] += 5;

scores.Charlie += 7;

//Scores afterwards:
console.log("Scores after updating: ");
console.log(scores);

//2. Digging into objects and arrays:
var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};
//get out the number 123 out of the object using one line of JS
console.log("Number: ",myCrazyObject["some array"][2].number);
