var express = require("express")
var app = express()
var Beer = require("../models/beer")

app.get("/beers", (req, res)=> {
    Beer.find({})
        .then((beers)=> {
            res.render("list-beers", {beers:beers})
        })
        .catch((err)=> {
            res.send(err)
        })
})

module.exports = app