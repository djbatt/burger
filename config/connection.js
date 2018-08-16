var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "nd5o0u6jd45esccb",
    password: "sjw33wz6g9xs1k02",
    database: "ht8cymf3yv8l40dl"
})

connection.connect(function(err) {
    if (err) {
        console.log(`Error connecting ${err.stack}`);
        return;
    }
    console.log(`Connected as Id: ${connection.threadId}`);
})

module.exports = connection;