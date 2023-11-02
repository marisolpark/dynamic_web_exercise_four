const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("About");
});

router.get("/me", (req, res) => {
    res.send("<h1>About Me</h1>");
});

module.exports = router;