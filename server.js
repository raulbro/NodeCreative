var express = require("express");
var app = express();
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
	res.sendFile("/index.html", {"root": "views"});
});

router.get("/about",function(req,res){
	res.sendFile("/about.html", {"root": "views"});
});

router.get("/contact",function(req,res){
	res.sendFile("/Contact.html", {"root": "views"});
  //res.sendFile(path + "Contact.html");
});

app.use("/",router);

app.post('/submit-message', function (req, res) {
	console.log("submit-message");
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    res.send("Name: " + name + "<br>" +
    "Email: " + email + "<br>" +
    "Message: " + message + "<br>" +' Submitted Successfully!');
});

app.listen(3001,function(){
  console.log("Live at Port 3001");
});