var connection = require("../config/connection.js");

var orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            res.json(result);
        })

    },
    insertOne: function() {
        connection.query(`INSERT INTO burgers`)

    },
    updateOne: function() {

    }
}

module.exports = orm;