//Excercise 1
let temp = Math.floor(Math.random() * 20) + 1;
function weather(temp) {
  console.log(temp);
  if (temp < 10 && temp > -5) {
    console.log("Theweather is cold");
  } else {
    console.log("Theweather is moderate");
  }
}

console.log(weather(temp));

//Excercise 2

let foodArray = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood(food) {
  var favorite = food[Math.floor(Math.random() * food.length)];
  return favorite;
}

console.log(randomFood(foodArray));

//Excercise 3

function crystalGazer(childrenNumber, partnerName, location, jobTitle) {
  console.log(
    `You will be ${jobTitle} in ${location} and married to ${partnerName} with ${childrenNumber} children.`
  );
}

crystalGazer(5, "Lily", "London", "Business Manager");

//Exercise 4

function ageCalculator(birthYear, currentYear) {
  let age = currentYear - birthYear;
  return `You are either ${age} or ${age - 1}`;
}

console.log(ageCalculator(1982, 2022));

//Excercise 5
function ageCalculatorAdvance(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  return `You are either ${age} or ${age - 1}`;
}

console.log(ageCalculatorAdvance(1984));

//Excercise 6
function degreeRadianCoversion(degree){
    let radian = degree*(Math.PI/180);
return radian.toFixed(6); //fixed decimal position
}

console.log(degreeRadianCoversion(90));

//Excercise 7
function calBoxAreaVolume(width, height, depth){
let area = width * height;
let volume = area*depth;
let result = (`The area of the box is: ${area} \nThe volumn of the box is: ${volume}`);
return result;
}

console.log(calBoxAreaVolume(7,2,5))