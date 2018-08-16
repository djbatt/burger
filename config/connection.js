var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	jzejgx94iys0q74o",
    password: "di613xbhh6616e9t",
    database: "sqjpz6rfxd9hw2yh"
})

connection.connect(function(err) {
    if (err) {
        console.log(`Error connecting ${err.stack}`);
        return;
    }
    console.log(`Connected as Id: ${connection.threadId}`);
})

module.exports = connection;