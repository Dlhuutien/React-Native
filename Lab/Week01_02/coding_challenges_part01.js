// Coding Challenge #1
console.log("Coding Challenge #1");


// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// DATA 1
// 1. Store Mark's and John's mass and height in variables
var massMark = 78
var heightMark = 1.69

var massJohn = 92
var heightJohn = 1.95

console.log("DATA 1");
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
BMIMark = massMark / heightMark ** 2
console.log("Mark's BMI")
console.log(BMIMark)

BMIJohn = massJohn / heightJohn **2
console.log("Join's BMI")
console.log(BMIJohn)

// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.
markHigherBMI = BMIMark > BMIJohn
console.log("Mark has a higher BMI than Join")
console.log(markHigherBMI)

// ----------------------


// Coding Challenge #2
console.log("\n\nCoding Challenge #2");
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if(BMIMark > BMIJohn)
    console.log("Mark's BMI is higher than John's")
else
    console.log("John's BMI is higher than Mark's")

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
if(BMIMark > BMIJohn)
    console.log("Mark's BMI (" + BMIMark.toFixed(2) + ") is higher than John's ("+ BMIJohn.toFixed(2) +")")
else
    console.log("John's BMI (" + BMIJohn.toFixed(2) + ") is higher than Mark's ("+ BMIJohn.toFixed(2) +")")


// DATA 2
var massMark2 = 95
var heightMark2 = 1.88
var massJohn2 = 85
var heightJohn2 = 1.76

console.log("\nDATA 2");
BMIMark2 = massMark2 / heightMark2 ** 2
console.log("Mark's BMI")
console.log(BMIMark2)

BMIJohn2 = massJohn2 / heightJohn2 **2
console.log("Join's BMI")
console.log(BMIJohn2)

markHigherBMI2 = BMIMark2 > BMIJohn2
console.log("Mark has a higher BMI than Join")
console.log(markHigherBMI2)

if(BMIMark2 > BMIJohn2)
    console.log("Mark's BMI (" + BMIMark2.toFixed(2) + ") is higher than John's ("+ BMIJohn2.toFixed(2) +")")
else
    console.log("John's BMI (" + BMIJohn2.toFixed(2) + ") is higher than Mark's ("+ BMIJohn2.toFixed(2) +")")

//-------------------------------

// Coding Challenge #3 
console.log("\n\nCoding Challenge #3");
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!

// Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const teamDolphins = [96,108,89]
const teamKoalas = [88,91,110]


// Your tasks:
// 1. Calculate the average score for each team, using the test data below
const sumDolphins = teamDolphins.reduce((partialSum, a) => partialSum + a, 0)
const avgDolphins = sumDolphins / teamDolphins.length;

const sumKoalas = teamKoalas.reduce((partialSum, a) => partialSum + a, 0)
const avgKoalas = sumKoalas / teamKoalas.length;

console.log('Dolphins Average Score:' + avgDolphins);
console.log('Koalas Average Score:' + avgKoalas);

// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
if (avgDolphins > avgKoalas) {
    console.log("Dolphins win!");
} else if (avgKoalas > avgDolphins) {
    console.log("Koalas win!");
} else {
    console.log("It's a draw!");
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
const minScore = 100;
if (avgDolphins > avgKoalas && avgDolphins >= minScore) {
    console.log("Dolphins win the trophy with the minimum score rule!");
} else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
    console.log("Koalas win the trophy with the minimum score rule!");
} else if (avgDolphins === avgKoalas && avgDolphins >= minScore && avgKoalas >= minScore) {
    console.log("Both teams have the same score, and it's a draw with the minimum score rule!");
} else {
    console.log("No team wins!");
}

//------------------------------
// Coding Challenge #4
console.log("\n\nCoding Challenge #4");
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
let bill = 275

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
console.log('The bill was '+ bill+', the tip was '+ tip+', and the total value '+ (bill + tip));