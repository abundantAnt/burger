const express = require("express");
const burger = require("../models/burger.js");
var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(burgerData) {
        console.log(burgerData);
        res.render("index", {burger_data: burgerData});
    });
});

router.post('/api/burgers', function(req, res) {
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