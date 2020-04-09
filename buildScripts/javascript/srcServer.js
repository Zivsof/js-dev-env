import express from 'express';
import path from 'path';
import open from 'open';
import webpack from "webpack";
import config from "../../webpack.config.dev";

var port = 3000;
var app = express();
const compiler = webpack(config);

/**
 * we are going to tell express to use our webpack dev middleware.
 * and we will pass it, the compiler that we set up on line 9.
 * inside of app.use we will define two options,
 * we will tell  it (noInfo) not to display any special info, and then also we will configure our public path.
 * */

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../src/index.html'));
});

app.get('/users', function (req, res) {
  //Hard coding for simplicity, Pretend this hits a real database.
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
    { "id": 3, "firstName": "Tina", "lastName": "lee", "email": "lee.tina@hotmail.com" }
  ]);
});


app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
