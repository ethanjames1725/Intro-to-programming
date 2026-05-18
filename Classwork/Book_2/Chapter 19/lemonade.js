//create days of the week array
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//define types of weather
var weather = ["Sunny", "Cloudy", "Raining", "Windy", "Snowy", "Thunderstorm", "Partly Cloudy"];
//set min max temperatures
var minTemp = 32;
var maxTemp = 110;
//cost (to you) of a cup of lemonade
var lemonadeCost = 0.5;
//array for storing daily temps
var dailyTemp = [];

//listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

//make the week's weather
generateWeather();

//function to generate random weather
function generateWeather() {
    var weatherToday;
    var tempToday;

    for (var i = 0; i < days.length; i++) {
        //generate random weather
        weatherToday = weather[Math.floor(Math.random() * weather.length)];

        //generate random temperature
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;

        //store daily temp in array
        dailyTemp[i] = tempToday;

        //log the weather and temperature for the day
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" +
            weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</ div>";
    }
}


//calculate glasses of lemonade sold - openTheStand function
function openTheStand() {
    var glassesSold = 0; //daily
    var totalGlasses = 0; //weekly
    var glassesLeft = 0; //left to sell

    //clear previous results 
    resetForm();

    //get input
    var numGlasses = Number(document.getElementById("numGlasses").value);
    var glassPrice = Number(document.getElementById("glassPrice").value);

    //loop through each day of the week
    for (var i = 0; i < days.length; i++) {
        //glasses sold depends on temperature and price
        glassesSold = Math.floor((dailyTemp[i] / glassPrice));
        //how many glasses do we have left now?
        glassesLeft = numGlasses - totalGlasses;
        //we can't sell more than we have
        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }
        //increase the weekly total
        totalGlasses = glassesSold + totalGlasses;
        //display results for the day
        document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p > ";
    }
    //display weekly results
    displayResults(numGlasses, glassPrice, totalGlasses);
}

//function to display weekly results
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    var revenue = weeklySales * glassPrice;
    var expense = weeklyInventory * lemonadeCost;
    var leftOver = weeklyInventory - weeklySales;
    var profit = revenue - expense;

    // print out the weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p > ";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p > ";
    document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";
}

//function to reset form and results
function resetForm() {
    document.getElementById("result").innerHTML = "";
}
