var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var users = require("./routes/users");

var app = express();
var port = 3000;

app.listen(port, function(){
    console.log("Running on port "+ port );
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/", index);
app.use("/api", users);
