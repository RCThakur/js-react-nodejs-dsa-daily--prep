const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/aboutUs":
        res.end("I am Rinkesh Thakur");
        break;
      default:
        res.end("404 Not found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started"));
