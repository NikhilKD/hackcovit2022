const mysql = require('mysql2');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'nikhita@123',
  database: 'database'
});

console.log("hello");
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

  app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));


  //Get all employees
app.get('/employees', (req, res) => {
      console.log("hello")
      connection.query('SELECT * FROM providers', (err, rows, fields) => {
          if (!err){
              res.send(rows[0]);
              console.log(rows);
          }
          else{
              console.log(err);
          }
      })
  });