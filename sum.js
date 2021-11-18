var read = require("readline-sync");

var a = read.question("enter f no");
console.log(a);
var b = read.question("enter s no");
console.log(b);
var s = Number(a) + Number(b);
console.log("sum is " + s);
