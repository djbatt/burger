var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    create: function(burgerValue, cb) {
        orm.insertOne("burgers", "burger_name", burgerValue, function(res) {
            cb(res);
        })
    },
    update: function(condition, cb) {
        orm.updateOne("burgers", "devoured", condition, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;