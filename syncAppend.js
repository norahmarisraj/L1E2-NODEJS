var fs = require('fs')

var data = fs.readFileSync("input.txt");

console.log("Begin reading");
console.log(data.toString());
console.log("End reading");


fs.appendFileSync('input.txt', 'I am appending a file.');
console.log("Begin appending file");

console.log("End appending file");
console.log("Begin re-reading file");

fs.readFileSync('input.txt', function (err, anotherData));
console.log(anotherData.toString());
console.log("Finish re-reading file");
