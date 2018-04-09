var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://thibaptistella:93032660mi@ds161336.mlab.com:61336/myfirstapp");

router.get("/users", function(req, res, next) {
  db.users.find(function(err, users) {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
});

router.post("/users", function(req, res, next) {
  var user = req.body.data;
  if(user.users){
    res.status(400);
    res.json({
      error:"shit data"
    });
  }else {
    db.users.save(user, function(err, saveUsers) {
      if(err){
        res.send(err);
      }
      res.json(saveUsers);
    });
  }
});

module.exports = router;
