var express = require("express");
var path = require("path");
var openTS = require("open");

var port = 3000;
var app = express();

app.get("/", function (req: any, res: any) {
  res.sendFile(path.join(__dirname, "../../src/index.html"));
});

app.listen(port, function (err: any) {
  if (err) {
    console.log(err);
  } else {
    openTS("http://localhost:" + port);
  }
});
