"use strict";

var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        orm.insertOne(table, cols, vals, (res) => {
            cb(res);
        });
    },
    updateOne: (table, setVal, condition, cb) => {
        orm.updateOne(table, setVal, condition, (res) => {
            cb(res);
        });
    },
    deleteOne: (table, condition, cb) => {
        orm.deleteOne(table, condition, (res) => {
            cb(res);
        });
    },
    resetAll: (table, setVal, cb) => {
        orm.resetAll(table, setVal, (res) => {
            cb(res);
        });
    },
    getPatties: (table, setVal, cb) => {
        orm.getPatties(table, setVal, (res) => {
            cb(res);
        });
    },
    getBuns: (table, setVal, cb) => {
        orm.getBuns(table, setVal, (res) => {
            cb(res);
        });
    },
    getToppings: (table, setVal, cb) => {
        orm.getToppings(table, setVal, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;