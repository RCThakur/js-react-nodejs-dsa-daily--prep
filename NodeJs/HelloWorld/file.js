const fs = require("fs");
const os = require("os");

// fs.writeFileSync("./test.txt", "Hey There ");

// const result = fs.readFileSync("./contact.txt", "utf-8");

// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

console.log(os.cpus().length);
