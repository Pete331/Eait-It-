const mysql = require("mysql");

let connection;

// JAWSDB used to host sql server on heroku, if the environment is website uses jaws db otherwise local server
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db",
  });
}
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected on thread " + connection.threadId);
});

module.exports = connection;
