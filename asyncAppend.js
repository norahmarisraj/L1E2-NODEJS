var fs = require("fs");

console.log("Begin reading");
fs.readFile('input.txt', function (err, data) {
	if (err) return console.error(err);

	console.log(data.toString());
	console.log("End reading");

fs.appendFile('input.txt', 'I am appending a file', function (err, data) {
  if (err) return console.error(err);

  console.log("Begin appending file");
  console.log("End appending file");
  console.log("Begin re-reading file");

fs.readFile('input.txt', function (err, anotherData) {
   if (err) return console.error(err);
   console.log(anotherData.toString());
   console.log("Finish re-reading file");

   
	});
});

});
