"use strict";

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      orm.insertOne(table, cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(table, setVal, condition, cb) {
      orm.updateOne(table, setVal, condition, function(res) {
        cb(res);
      });
    },
    resetAll: function(table, setVal, cb) {
      orm.resetAll(table, setVal, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;