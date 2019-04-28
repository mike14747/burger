"use strict";

var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function (req, res) {
    var table = "burgers";
    burger.insertOne(table, ["patty_id", "bun_id", "topping_id"], [req.body.patty_id, req.body.bun_id, req.body.topping_id], function(result) {
        res.json({ id: result.insertId });
      });
});

router.put("/api/burger/:id", function (req, res) {
    var table = "burgers";
    var setVal = "devoured=1";
    var condition = "id=" + req.params.id;
    burger.updateOne(table, setVal, condition, function (result) {
        if (result.changedRows == 0) {
            return res.render("error").end();
        } else {
            res.status(200).end();
        }
    });
});

router.put("/api/reset", function (req, res) {
    var table = "burgers";
    var setVal = "devoured=0";
    burger.resetAll(table, setVal, function (result) {
        if (result.changedRows == 0) {
            return res.render("error").end();
        } else {
            res.status(200).end();
        }
    });
});

router.get("*", function (req, res) {
    res.render("error");
});

module.exports = router;