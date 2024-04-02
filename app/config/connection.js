// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************


// Require mysql
const mysql = require("mysql");

//set up our connection information

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Christ001++",
    database:"chirpy"
})

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