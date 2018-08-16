var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burgerId = req.params.id;

    burger.updateOne(burgerId, function(data) {
        res.redirect("/");
    });
});
module.exports = router;