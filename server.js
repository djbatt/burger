var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var port = process.env.port || 8080;

server.use(bodyParser.urlencoded({extended: true}));


var exphbs = require("express-handlebars");

server.engine("handlebars", exphbs({defaultLayout: "main"}));
server.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

server.use("/", routes);

server.listen(port, function() {
    console.log(`Server listening on port: ${port}`);
})