var mysql = require("mysql");

connection.connect(function(err) {
    if (err) {
        console.log(`Error connecting ${err.stack}`);
        return;
    }
    console.log(`Connected as Id: ${connection.threadId}`);
})

module.exports = connection;