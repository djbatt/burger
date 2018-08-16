var connection = require("../config/connection.js");

var orm = {
    selectAll: function() { // retrieve all burgers on page load, and on insert One
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            res.json(result);
        })

    },
    insertOne: function(burgerName) { //insert a burger with a default false devoured
        connection.query(`INSERT INTO burgers VALUES (burger_name) VALUES ?`, [burgerName], function(err, result) {
            if (err) throw err;
            res.json(result);
        })

    }, //update the devoured to true when its devoured
    updateOne: function(id) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [id], function(err, result) {
            if (err) throw err;
            res.json(result);
        })
    }
}

module.exports = orm;