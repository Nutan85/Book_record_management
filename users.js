const express = require("express");
const router = express.Router();

// Example route: GET /users
router.get("/", (req, res) => {
  res.send("Welcome to the Users route!");
});

module.exports = router;
