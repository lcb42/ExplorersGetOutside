var express = require('express');
var codes = require('http-status-codes');
var bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var mysql = require('mysql');
const db = require('./db');
let dbDetails = db.getDbInfo(); // val is "Hello"
var connection = mysql.createConnection(dbDetails);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

connection.connect()

// create a GET route
app.get('/end', (req, res) => {
      
    console.log("Ending the db connection")
    connection.end()
    res.sendStatus(codes.StatusCodes.OK);
});


app.post('/submit', async (req, res) => {
    var userCode = req.body.user_code
    var distance = req.body.distance
    var activity = req.body.activity
    var dateCompleted = req.body.date_completed

    
    // Get user id of user_code - returns null if no matching user
    var userid = await getUserIfExists(userCode)
    
    if(!userid){
        res.sendStatus(codes.StatusCodes.UNAUTHORIZED, {error: "Please check the user code you are submitting."})
    }else{

        connection.query("INSERT INTO submissions (user_id, distance, activity, date) VALUES ( ?, ?, ?, ?);", [userid, distance, activity, dateCompleted], function (err, result) {
            if (err) throw err
            console.log("Successfully submitted new entry")
        })
    
        res.sendStatus(codes.StatusCodes.OK)
    }

})

function getUserIfExists(userCode) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT user_id FROM users WHERE user_code = ? ;", [userCode], function (err, result) {
            return err ? reject(err) : resolve(result[0].user_id);
        })
    })
}









