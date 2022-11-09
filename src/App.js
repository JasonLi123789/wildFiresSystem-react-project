const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    var county = req.body.county;
    var date = req.body.date;
    var temp = Number(req.body.temp);
    var humidity = Number(req.body.humidity);

    var content = {
        County : county,
        Date: date,
        Temp: temp,
        Humidity: humidity,
        _30_days_ave_prec: 0,
        _60_days_ave_prec: 0,
        _90_days_ave_prec: 0,
        Wildfire_Probability: 0
    }

    var data_jsonfile = JSON.stringify(content);

    var path_file = path.join(__dirname, "test.json");

    fs.writeFile(path_file,data_jsonfile, function(err){
        if (err){
            return console.log(err);
        }
        console.log("The file is created at: " + path_file);
    })

    res.send("The county you entered is:" + data_jsonfile);
})

app.listen("3000", function(req, res){
    console.log("The bmi is running on port 3000");
})