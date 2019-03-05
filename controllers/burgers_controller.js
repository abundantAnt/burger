const express = require("express");
const burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
        res.render("index", {burger_data: burgerData});
    });
});

router.post('/burgers/create', function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;