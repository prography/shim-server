var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const app = express();
require('dotenv').config();

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

con.connect(function(err) {
  if (err) throw err;
  // console.log("Connected!")
})

/* GET home page. */
router.get('/:name', function(req, res) {
  param = req.params.name
  let selectQuery = 'SELECT main_id FROM SHIM.MAIN_TB WHERE MAIN_TB.main_name = ?;'
  con.query(selectQuery, param, function(err, result){
    if (err){
      res.status(500).send({
        message: "Error"
      })
    }
    else {
      res.status(201).send(result)
    }
  })
});

router.post("/", function (req, res){
  id = req.body.id

  let selectQuery = 'SELECT main_name from SHIM.MAIN_TB WHERE main_id = ?'
  con.query(selectQuery, id, function(err, result){
    console.log(result)
    if (err){
      res.status(500).send({
        message: "Error"
      })
    }
    else {
      res.status(201).send(result)
    }
  })
})


module.exports = router;
