// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************


// Require mysql
const mysql = require("mysql");

//set up our connection information

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Chris001++",
    database: "chirpy"
  });
  

//Connect to the database
connection.connect(function(err){
    if(err){
        console.error("err connecting: " + err.stack);
        return;
    }
    console.log(`Connection established with id ${connection.threadId}`)
})

//Export connection
module.exports = connection;