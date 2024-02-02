// 2.1 Functions                                 
// Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'   
function describeCountry(country, population, capitalCity){
    result = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return result;
}

// Call this function 3 times,with input data for 3 different countries.Store the returned values in 3 different variables, and log them to the console
let country1 = describeCountry("Italy", 59.11, "Rome.");
let country2 = describeCountry("Spain", 47.42, "Madrid.");
let country3 = describeCountry("Portugal", 10.33, "Lisbon.");

console.log("Result of Function Declaration with three parameters:");
console.log(country1);
console.log(country2);
console.log(country3);
console.log("");

// 2.2 Function Declarations vs. Expressions
/* The world population is 7900 million people.Create Function Declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population  
To calculate the percentage, divide the given population value by 7900 and then multiply by 100                                                 
Call 'percentageOfWorld1' for 3 populations of countries your choice, store the results into variables, and log them to the console                                        
*/
function percentageOfWorld1(population){
  result = (population / 7900 * 100).toFixed(1) + "%";
  return result;
}

let percentageOfChina = percentageOfWorld1(1441);
let percentageOfItaly = percentageOfWorld1(59.11);
let percentageOfSpain = percentageOfWorld1(47.42);
let percentageOfPortugal = percentageOfWorld1(10.33);

console.log("Result of Function Declaration:");
console.log(`China has 1441 million people, which represents about ${percentageOfChina} of the world population.`);
console.log(`Italy has 59.11 million people, which represents about ${percentageOfItaly} of the world population.`);
console.log(`Spain has 47.42 million people, which represents about ${percentageOfSpain} of the world population.`);
console.log(`Portugal has 10.33 million people, which represents about ${percentageOfPortugal} of the world population.`);
console.log("");

// Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
let percentageOfWorld2 = function(population){
  result = (population / 7900 * 100).toFixed(1) + "%";
  return result;
};

let percentageOfChina2 = percentageOfWorld2(1441);
let percentageOfItaly2 = percentageOfWorld2(59.11);
let percentageOfSpain2 = percentageOfWorld2(47.42);
let percentageOfPortugal2 = percentageOfWorld2(10.33);

console.log("Result of Function Expression:");
console.log(`China has 1441 million people, which represents about ${percentageOfChina2} of the world population.`);
console.log(`Italy has 59.11 million people, which represents about ${percentageOfItaly2} of the world population.`);
console.log(`Spain has 47.42 million people, which represents about ${percentageOfSpain2} of the world population.`);
console.log(`Portugal has 10.33 million people, which represents about ${percentageOfPortugal2} of the world population.`);
console.log("");

// 2.3 Arrow Functions
// Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
const percentageOfWorld3 = population => (population / 7900 * 100).toFixed(1) + "%";

console.log("Result of Arrow Function:");
console.log(`China has 1441 million people, which represents about ${percentageOfWorld3(1441)} of the world population.`);
console.log(`Italy has 59.11 million people, which represents about ${percentageOfWorld3(59.11)} of the world population.`);
console.log(`Spain has 47.42 million people, which represents about ${percentageOfWorld3(47.42)} of the world population.`);
console.log(`Portugal has 10.33 million people, which represents about ${percentageOfWorld3(10.33)} of the world population.`);
console.log("");

// 2.4 Functions Calling Other Functions
/*
Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world'                                                
To calculate the percentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier                                                 
Call 'describePopulation' with data for 3 countries your choice
*/
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;

console.log("Result of Function Calling Other Function:");
console.log(describePopulation("China", 1441));
console.log(describePopulation("Italy", 59.11));
console.log(describePopulation("Spain", 47.42));
console.log(describePopulation("Portugal", 10.33));
console.log("");

// 2.5 Introduction to Array                        
/*
Create an array containing 4 population values of 4 countries yourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'                                                 
Log to the console whether the array has 4 elements or not (true or false)   
*/
let populations = [1441, 59.11, 47.42, 10.33];
console.log(`Does the array "populations" have 4 elements? Response: ${populations.length == 4}`);
console.log("");

// Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values    
let percentages = [];
populations.forEach(population => percentages.push(percentageOfWorld1(population)));
console.log(`The array "percentages" has the following elements: ${percentages}`);
console.log('The array "percentages" has the following elements: ', percentages);
console.log('The array "percentages" has the following elements: ' + percentages);
console.log("");

let percentagesAlternative = [percentageOfWorld1(1441), percentageOfWorld1(59.11), percentageOfWorld1(47.42), percentageOfWorld1(10.33)];
console.log('The array "percentagesAlternative" has the following elements:' + percentagesAlternative);
console.log("");


// 2.6 Basic Array Operations (Methods)
// Create an array containing all the neighbouring countries of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'   
let neighbours = ["Austria", "Italy", "Switzerland"];  

console.log('The array "neighbours" has the following elements: ' + neighbours);
console.log("");


// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array  
neighbours.push("Utopia");

console.log('After appending "Utopia" by using push method, the array "neighbours" has the following elements: ' + neighbours);
console.log("");

// Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array  
neighbours.pop();

console.log('After extracting "Utopia" by using pop method, the array "neighbours" has the following elements: ' + neighbours);
console.log("");

//If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'    
if(!neighbours.includes('Germany')) console.log('Probably not a central European country :D');
console.log("");

//Change the name of one of your neighbouring countries.To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.  
let index = neighbours.indexOf("Italy");
console.log(`The element at index ${index} before modification is: ${neighbours[index]}`);

neighbours[index] = "Republic of Italy";
console.log(`The element at index ${index} after modification is: ${neighbours[index]}`);
console.log("");

// 2.7 Iteration: The for Loop
// There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
for(let voter = 1; voter <= 50; voter++) console.log(`Voter number ${voter} is currently voting`);
console.log("");

// Looping Arrays, Breaking and Continuing                                
// Let's bring back the 'populations' array from a previous assignment                
// Use a for loop to compute an array called 'percentages2 'containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier       
let percentages2 = [];
for(let i = 0; i < populations.length; i++){
percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(`The array "percentages2" has the following elements: ${percentages2}`);
console.log("");

// Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is. 
function check2ArraysContents(arrayA, arrayB){ 
  if(arrayA.length != arrayB.length) return false;
  let count = 0;
  for (let itemA of arrayA){
    for (let itemB of arrayB){
     if(itemA === itemB) 
    count++;
    }
  }
  if(count === arrayA.length) return true;
  else return false;
}
console.log(`This statement confirms whether the arrays "percentages": ${percentages} and "percentages2": ${percentages2} contain the same elements: ${check2ArraysContents(percentages, percentages2)}`);
console.log(`This statement confirms whether the arrays "percentages": ${percentages} and "percentagesAlternative": ${percentagesAlternative} contain the same elements: ${check2ArraysContents(percentages, percentagesAlternative)}`);
console.log(`This statement confirms whether the arrays "percentages": ${percentages} and "populations": ${populations} contain the same elements: ${check2ArraysContents(percentages, populations)}`);
console.log("");

// Looping Backwards and Loops in Loops
//Storethisarrayofarraysintoavariablecalled'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];    
let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];   

//Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country                        
//You will need a loop inside a loop for this.This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

// Solution 1:
console.log('Solution 1:');
for(let arr of listOfNeighbours){
  for(let country of arr){
    console.log(`Neighbour: ${country}`);
  }
}
console.log("");

// Solution 2:
console.log('Solution 2:');
function getNeighbours(array = [], countryName = 'none'){
if(array.length === 0 && countryName === 'none'){
    console.log('An empty array and an undefiend country name have been provided. Please retry and make sure to provide valid data.');
  }
else if(array.length === 0){
      console.log('An empty array has been provided. Please retry and make sure to provide valid data.');
      return;
   }
else if(countryName === 'none'){
    console.log('An undefiend country name has been provided. Please retry and make sure to provide valid data.');
    return;
 }
let found = false; 
for (let arr of array) {
  if (arr.includes(countryName)) {
      found = true;
      if (arr.length === 1) {
          console.log(`No neighbour specified for ${countryName} in the array.`);
      } else {
          let neighbors = arr.filter(country => country !== countryName).join(', ');
          console.log(`Neighbours of ${countryName}: ${neighbors}`);
      }
      break;
    }
  }

  if (!found) {
      console.log(`${countryName} is not listed in the array.`);
  }

}
console.log(`The array "listOfNeighbours" contains: ${listOfNeighbours}`);
console.log("");
console.log('Testing with valid array and "Italy" as arguments. Result:');
getNeighbours(listOfNeighbours, 'Italy'); // passed
console.log("");
console.log('Testing with valid array and "Spain" as arguments. Result:');
getNeighbours(listOfNeighbours, 'Spain'); // passed
console.log("");
console.log('Testing with valid array and "Canada" as arguments. Result:');
getNeighbours(listOfNeighbours, 'Canada'); // passed
console.log("");
console.log('Testing with valid array and "Poland" as arguments. Result:');
getNeighbours(listOfNeighbours, 'Poland'); // passed
console.log("");
console.log('Testing with empty array and "Canada" as arguments. Result:'); 
getNeighbours([], "Canada"); // passed
console.log("");
console.log('Testing with valid array and undefined name as arguments. Result:'); 
getNeighbours(listOfNeighbours); //passed
console.log("");
console.log('Testing with empty array and undefined name as arguments. Result:'); 
getNeighbours([]); // passed
console.log("");
console.log('Testing with no arguments. Result:');
getNeighbours(); // passed
console.log("");

// 2.8 LECTURE: The while Loop                                
// Recreate the challenge from the 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')                                
// Reflect on what solution you like better for this task: the for loop or the while loop?  
let percentages3 = [];
let count = 0;
while(count < populations.length){
  percentages3.push(percentageOfWorld1(populations[count]));
  count++;
}
console.log(`The array "percentages3" has the following elements: ${percentages3}`);
console.log("");

// 2.9 Introduction to Objects                        
// Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
let myCountry = {
country : 'Italy',
capital : 'Rome',
language : 'italian',
population : 59110000,
neighbors : ['Austria', 'France', 'Vatican', 'San Marino', 'Slovenia', 'Switzerland']
}

// Dot vs. Bracket Notation                                
// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'        
console.log(`${myCountry.country} has ${myCountry.population / 10**6} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);
console.log("");

// Increase the country 's population by two million using dot notation,and then decrease it by two million using brackets notation.
myCountry.population += 2000000;
console.log(`Increasing the country 's population by two million using dot notation: ${myCountry.population}`);
myCountry['population'] -= 2000000;
console.log(`Decreasing it by two million using brackets notation: ${myCountry['population']}`);
console.log("");

// Object Methods                        
// Add a method called 'describe' to the 'myCountry’ object.This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.       
myCountry.describe = function() {
console.log(`${this.country} has ${this.population / 10**6} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`);
};

// Call the 'describe' method       
console.log('Calling the newly added method "describe":');
myCountry.describe();
console.log("");

// Add a method called 'checkIsland' to the 'myCountry' object.This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
myCountry.checkIsIland = function(){
this.isIland = this.neighbors.length === 0 ? true : false;
};
myCountry.checkIsIland();
console.log(`The value of "isIland" property of "myCountry" object is: ${myCountry.isIland}`); // false
console.log(myCountry);