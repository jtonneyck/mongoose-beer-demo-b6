var express = require("express")
var app = express()

app.get("/", (req, res)=> {
    res.redirect("/beers")
})

module.exports = app