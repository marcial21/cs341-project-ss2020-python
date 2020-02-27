
var express = require('express');
var router = express.Router();
var dbms = require('./dbms');

//this get exists for testing purposes. Our website will issue post requests that pass data
router.get('/', function (req, res) {

    //selects all nuclear power plants
    dbms.dbquery('select * from PlantEmissions2018 where PLPRMFL=\'NUC\';', function (error, result) {

        console.log("database got queried");
        res.send(result);

    });
});


router.post('/', function (req, res) {
    //testing how the form data looks when sent in a post
    console.log(req.body);
    console.log("post sent");

    //switch(req.body.plant)


    var milesToDegreesLat = req.body.distance / 69;
    var milesToDegreesLong = req.body.distance / 53;

    

    var latMin = req.body.latitude - milesToDegreesLat;
    var latMax = parseFloat(req.body.latitude) + parseFloat(milesToDegreesLat);
    var longMin = req.body.longitude - milesToDegreesLong;
    var longMax = parseFloat(req.body.longitude) + parseFloat(milesToDegreesLong);

    console.log(req.body.distance + ", " + milesToDegreesLat + ", " + req.body.latitude + ", " + latMax);
    console.log(req.body.latitude + ", " + milesToDegreesLat + ", " + (req.body.latitude + milesToDegreesLat));

    var queryString = "select avg(PLCO2RTA) as avgCO2 from PlantEmissions2018 ";
    queryString += "where LAT between " + latMin + " and " + latMax + " ";
    queryString += "and LON between " + longMin + " and " + longMax + ";";

    console.log(queryString);

    //sample legal working query: select avg(PLCO2RTA) as avgCO2 from PlantEmissions2018 where LAT between 50 and 60 and LON between -150 and -130;

    dbms.dbquery(queryString, function (error, result) {

        console.log("database got queried");
        res.send(result);

    }); 
});

module.exports = router;