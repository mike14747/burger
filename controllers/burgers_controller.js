"use strict";

var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

var selObj = {};

router.get("/", (req, res, next) => {
    burger.selectAll((data) => {
        selObj.burgers = data;
    });
    next();
});

router.get("/", (req, res, next) => {
    burger.getPatties((data) => {
        selObj.patties = data;
    });
    next();
});

router.get("/", (req, res, next) => {
    burger.getBuns((data) => {
        selObj.buns = data;
    });
    next();
});

router.get("/", (req, res) => {
    burger.getToppings((data) => {
        selObj.toppings = data;
        res.render("index", selObj);
    });
});

router.post("/api/burger", (req, res) => {
    var table = "burgers";
    burger.insertOne(table, ["patty_id", "bun_id", "topping_id"], [req.body.patty_id, req.body.bun_id, req.body.topping_id], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", (req, res) => {
    var table = "burgers";
    var setVal = "devoured=1";
    var condition = "id=" + req.params.id;
    burger.updateOne(table, setVal, condition, (result) => {
        if (result.changedRows == 0) {
            return res.render("error").end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/delete/:id", (req, res) => {
    var table = "burgers";
    var condition = "id=" + req.params.id;
    burger.deleteOne(table, condition, (result) => {
        if (result.affectedRows == 0) {
            return res.render("error").end();
        } else {
            res.status(200).end();
        }
    });
});

router.put("/api/reset", (req, res) => {
    var table = "burgers";
    var setVal = "devoured=0";
    burger.resetAll(table, setVal, (result) => {
        if (result.changedRows == 0) {
            return res.render("error").end();
        } else {
            res.status(200).end();
        }
    });
});

router.get("*", (req, res) => {
    res.render("error");
});

module.exports = router;