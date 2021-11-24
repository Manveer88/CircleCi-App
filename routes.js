const express = require('express');
// const todos = require("./todos");

const router = express.Router();
const todos=[
    {
        id:1,
        task: "Fix Sink"
    },
    {
        id:2,
        task: "Rick Sink"
    }
]
router.get("/", function(req, res) {
  res.json(todos);
});

module.exports = router;