console.log(typeof 8);
var doTheMath = 7 + 8 + 36 + 18 + 12
console.log(typeof doTheMath);
console.log(typeof "the cat's favorite toy");
console.log(typeof automobile);

var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "brown",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 450000
}

console.log("The type of dreamCar is:", typeof dreamCar);
document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;