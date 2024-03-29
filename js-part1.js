// 1. Values and Variables
// Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
let country = "Moldova";
let continent = "Europe";
let population = 2615000;

// Log their values to the console
console.log('The value of "country" variable is:', country);
console.log('The value of "continent" variable is:', continent);
console.log('The value of "population" variable is:', population);
console.log("");

// 2. Data Types
// Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
 let isIland = false;
 let language;
 console.log('The value of "isIland" variable is:', isIland);
 console.log('The value of "language" variable is:', language);
 console.log("");

 // Log the types of 'isIsland', 'population', 'country' and 'language' to the console
 console.log('The data type of "isIland" variable is: ', typeof(isIland));
 console.log('The data type of "population" variable is: ', typeof(population));
 console.log('The data type of "country" variable is: ', typeof(country));
 console.log('The data type of "language" variable is: ', typeof(language));
 console.log("");

 // 3. Basic Operators
 // If your country split in half, and each half would contain half the population, then how many people would live in each half?
 let halfPopulation = population / 2;
 console.log('If your country split in half, and each half would contain half the population, then how many people would live in each half? Response:', halfPopulation); //1307500
 console.log("");

 // Increase the population of your country by 1 and log the result the console
 population++; // Increasing the population (2615000) by 1
 console.log('Increasing the population (2615000) by 1. Result:', population); // 2615001
 population--; // Decreasing the population (2615001) by 1 back
 console.log('Decreasing the population (2615001) by 1 back. Result:', population);
 console.log("");

 // Finland has a population of 6 million. Does your country have more people than Finland?
 let populationOfFinland = 6000000;
 let hasMoldovaMorePeopleThanFinland = population > populationOfFinland;
 console.log('Does your country have more people than Finland? Result:', hasMoldovaMorePeopleThanFinland); //false

 // The average population of a country is 33 million people. Does your country have less people than the average country?
let hasMoldovaLessPeopleThanAverageCountry = population < 33000000;
console.log('The average population of a country is 33 million people. Does your country have less people than the average country? Result:', hasMoldovaLessPeopleThanAverageCountry); //true
console.log("");

// Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
let description = country + " is in " + continent + ", and its " + (population / (10 ** 6)).toFixed(3) + " million people speak romanian.";
console.log(description); // Moldova is in Europe, and its 2.615 million people speak romanian.
console.log("");

// Equality Operators: == vs. === 
// Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
let numNeighbours = prompt('How many neighbour countries does your country have?');

// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)    
console.log(`The value entered for the 1st prompt is: ${numNeighbours}`);
console.log('The result of the 1st prompt:');
if(numNeighbours == 1) console.log('Only 1 border!');

// Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1      
else if(numNeighbours > 1) console.log('More than 1 border');

// Use an else block to log 'Noborders' (this block will be executed when 'numNeighbours' is 0 or any other value) 
else console.log('Noborders');
console.log("");

// TASK: Test the code with different values of 'numNeighbours', including 1 and 0  
// STATUS: Tested!

// TASK: Change ==to===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?             
// STATUS: Tested!
// RESPONSE: When there is exactly 1 border, 'Noborders' is displayed. This is happening due to === checks for the same data type on both sides, but in this case it is "string" and "number", so data type do not match.

// Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1     
let numNeighbours2 = Number(prompt('How many neighbour countries does your country have?'));
console.log(`The value entered for the 2nd prompt is: ${numNeighbours2}`);
console.log('The result of the 2nd prompt:'); 
if(numNeighbours2 === 1) console.log('Only 1 border!');
else if(numNeighbours2 > 1) console.log('More than 1 border');
else console.log('Noborders');
console.log("");

// Reflect on why we should use the === operator and type conversion in this situation 
// RESPONSE: To make sure that not only the value, but also the data type is the same on both sides.

// 4. Logical Operators 
// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.    
// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.   
// If yours is the right country, log as string like this: 'You should live in Portugal:)'. If not, log 'Portugal does not meet your criteria :('   
console.log(`Sarah wants to live in a country that speaks English, has less than 50 million people and is not an island. Testing the given values of "language": ${language}, "population": ${population}, and "isIland": ${isIland}. Result:`);
if(language == "English" && population < 50000000 && !isIland) console.log(`You should live in ${country}:)`);
else console.log(`${country} does not meet your criteria :(`);
console.log("");

// Your country probably does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)
language = "English";
console.log(`Sarah wants to live in a country that speaks English, has less than 50 million people and is not an island. Testing the given values of "language": ${language}, "population": ${population}, and "isIland": ${isIland}. Result:`);
if(language == "English" && population < 50000000 && !isIland) console.log(`You should live in ${country}:)`);
else console.log(`${country} does not meet your criteria :(`);
console.log("");

// 5. Strings and Template Literals                                        
// Recreate the description  variable from the last assignment (basic operators), this time using the template literal syntax   
let description2 = `${country} is in ${continent}, and its ${(population / (10 ** 6)).toFixed(3)} million people speak ${language = "romanian"}.`;
console.log(description2);
console.log("");

// 6. Type Conversion and Coercion                                
// Predict the result of these 5 operations without executing them:
// '9' - '5'; 
//  '19' - '13' + '17'; 
// '19' - '13' + 17; 
//  '123' < 57; 
// 5 + 6 + '4' + 9 - 4 - 2;   

//Execute the operations to check if you were right
console.log("The result of '9' - '5' is: ", '9' - '5'); // 4
console.log("The result of '19' - '13' + '17' is: ", '19' - '13' + '17'); // 617
console.log("The result of '19' - '13' + 17 is: ", '19' - '13' + 17); // 23
console.log("The result of '123' < 57 is: ", '123' < 57); // false
console.log("The result of 5 + 6 + '4' + 9 - 4 - 2 is: ", 5 + 6 + '4' + 9 - 4 - 2); // 1143
console.log("");

// if / else Statements
// If your country's population is greater than 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)                                      // After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
if(population > 33000000) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33000000 - population} below average`);
console.log("");

// 6. The switch Statement                        
// Use a switch statement to log the following string for the given 'language':
// f. Chinese or mandarin:  'MOST number of native speakers!'
// g. Spanish: '2nd place in number of native speakers'
// h. English: '3rd place'                                
// i. Hindi: 'Number 4'
// j. Arabic: '5th most spoken language'
// for all other simply log 'Great language too :D' 
console.log(`The result of switch statement for the given variable "language" with value: ${language} is:`); 
switch(language){
    case 'Chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'Mandarin':  
         console.log('MOST number of native speakers!');  
         break;
    case 'Spanish':
        console.log('2nd place in number of native speakers'); 
        break;
    case 'English': 
        console.log('3rd place');  
        break;
    case 'Hindi':
        console.log('Number 4');  
        break;
    case 'Arabic':
        console.log('5th most spoken language');   
        break;
    default:
        console.log('Great language too :D');   
}     