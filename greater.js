var read = require("readline-sync");

var a = read.question("enter f no");
console.log(a);
var b = read.question("enter s no");
console.log(b);
if (a > b) console.log("f is greater");
else console.log("s is greater");
