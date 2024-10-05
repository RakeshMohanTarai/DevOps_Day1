const express = require("express");

const app = express();

app.get('/',(req, res) => {
    res.send("Jenkins_Day1")
});

module.exports = app;