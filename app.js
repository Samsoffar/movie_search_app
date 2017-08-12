var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/",function(req, res) {
    res.render("search");
});

app.get("/results", function(req,res){
    request("http://www.omdbapi.com/?s=iowa&apikey=thewdb", function(error, response, body) {
        if (!error, response.statusCode == 200) {
            var parsedData = JSON.parse(body);
            res.render("results", {data: parsedData});
        }
    });


});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started");
});