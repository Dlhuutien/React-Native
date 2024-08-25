// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// 1. Store Mark's and John's mass and height in variables
var massMark = 1.69
var heightMark = 78

var massJohn = 1.95
var heightJohn = 92

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
BMIMark = massMark / heightMark ** 2
console.log(BMIMark)

BMIJohn = massJohn / heightJohn **2
console.log(BMIJohn)

// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.
markHigherBMI = BMIMark > BMIJohn
// ----------------------


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"