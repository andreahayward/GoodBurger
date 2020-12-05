var express = require("express");
var router = express.Router();
var cat = require("../models/burger.js");

//get call
router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

//post call
router.post("/api/burgers", function (req, res) {
    const burgerName = req.body.burger_name;
    burger.insertOne("burger_name", burgerName, function (result) {
        res.json({ id: result.insertId });
    });
});

//put call
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne(req.params.id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//delete call
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;

  