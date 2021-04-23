const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

var mysql = require('mysql')
const db = require('./db.js');
var connection = mysql.createConnection(db)

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

connection.connect()

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });

    connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
        if (err) throw err
      
        console.log('The solution is: ', rows[0].solution)
    })

      
    connection.end()
});







