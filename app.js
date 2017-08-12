var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");
app.get("/results", function(req,res){
    request("http://www.omdbapi.com/?s=california&apikey=thewdb", function(error, response, body) {
        if (!error, response.statusCode == 200) {
            var results = JSON.parse(body);
            res.render("results");
        }
    });


});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started");
});