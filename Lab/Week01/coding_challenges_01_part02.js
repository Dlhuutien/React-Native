// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
// Data 1
let avgDolphins1 = calcAverage(44, 23, 71);
let avgKoalas1 = calcAverage(65, 54, 49);

// Data 2
let avgDolphins2 = calcAverage(85, 54, 41);
let avgKoalas2 = calcAverage(23, 34, 27);

// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log('Dolphins win ('+avgDolphins+' vs. '+avgKoalas+')');
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log('Koalas win ('+avgKoalas+ 'vs. '+avgDolphins+')');
    } else {
      console.log('No team wins!');
    }
  };

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and  Data 2
// 5. Ignore draws this time
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

//----------------------------------------
// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));

// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
const bills = [125, 555, 44];

// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
const tips = bills.map(calcTip);
console.log(tips);

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const totals = bills.map((bill, index) => bill + tips[index]);
console.log(totals);


//------------------------------
// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.