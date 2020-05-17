const express = require("express");
const burger = require("../models/burger");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log({ burger: data });
    res.render("index", { burger: data });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name"], [req.body.name], function (result) {
    console.log(result);
    // Send back the ID of the new quote
    res.status(200).end();
  });
});

router.put("/api/burgers/:id", function (req, res) {
  // sets variable condition of the id button clicked
  var condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
