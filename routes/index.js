var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const app = express();

var con = mysql.createConnection({
  host: "shim-db.ck6dpjl28utz.ap-northeast-2.rds.amazonaws.com",
  user: "shinshim",
  password: "Shim0323!",
  database: "SHIM"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/* GET home page. */
router.get('/:name', function(req, res) {
  param = [req.params.name]
  let selectQuery = 'SELECT main_id FROM SHIM.MAIN_TB WHERE MAIN_TB.main_name = ?;'
  con.query(selectQuery, param, function(err, result){
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
