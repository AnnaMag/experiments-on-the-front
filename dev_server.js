var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);

app.use(express.static('./public'));
app.use(require('webpack-dev-middleware')(compiler, {}));

app.get('/test', function(req, res) {
  res.json([{url: "", name: "foo"}, {url:"", name: "bar"}, {url: "", name: "baz"}]);
});

app.listen(3030, "localhost", function(err) {
  console.log("Now app listening on 3030");
});
