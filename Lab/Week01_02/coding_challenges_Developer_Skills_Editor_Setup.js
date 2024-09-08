// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a 
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
let data1 = [17, 21, 23]
let data2 = [12, 5, -5, 0, 4]
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up 
// into sub-problems!
function generateForecast(data) {
    let forecast = "";
    for (let i = 0; i < data.length; i++) {
        forecast += '...' + data[i] + 'ºC in ' + (i + 1) + ' day...'
    }
    return forecast;
}
console.log("data 1: "+generateForecast(data1))
console.log("data 2: "+generateForecast(data2))

