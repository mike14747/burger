"use strict";

var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

var orm = {
    selectAll: (cb) => {
        var queryString = "SELECT bg.id, p.patty, bn.bun, t.topping, bg.devoured FROM burgers AS bg INNER JOIN buns AS bn ON bg.bun_id=bn.bun_id INNER JOIN patties AS p ON bg.patty_id=p.patty_id INNER JOIN toppings AS t ON bg.topping_id=t.topping_id;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ")";
        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table, setVal, condition, cb) => {
        var queryString = "UPDATE " + table + " SET " + setVal + " WHERE " + condition + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: (table, condition, cb) => {
        var queryString = "DELETE FROM " + table + " WHERE " + condition + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    resetAll: (table, setVal, cb) => {
        var queryString = "UPDATE " + table + " SET " + setVal + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    getPatties: (cb) => {
        var queryString = "SELECT * FROM patties;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    getBuns: (cb) => {
        var queryString = "SELECT * FROM buns;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    getToppings: (cb) => {
        var queryString = "SELECT * FROM toppings;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
}

module.exports = orm;