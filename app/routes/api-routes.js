//**API-routes  */

//Dependencies

const connection = require("../config/connection.js");

//Routes

module.exports = function(app){
    //Get all chirps
    app.get("api/all",(req,res)=>{
        const dbQuery = "SELECT * FROM chirps";

        connection.query(dbQuery,(err,data)=>{
            if(err)throw err;
            res.json(data)
        })
    })

    //Add a chirp
    app.post("api/new", (req,res)=>{
        console.log("Chirp data:")
        console.log(req.body)

        const dbQuery = "INSERT INTO chirps (author,body,created_at) VALUES (?,?,?)";

        connection.query(dbQuery,[req.body.author, req.body.body, req.body.created_at],(err,data)=>{
            if(err) throw err,
            console.log("Chirp Successfully saved");
            res.end();
        })
    })
}

