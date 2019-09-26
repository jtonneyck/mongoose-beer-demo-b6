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

app.get("/beer/:beerId", (req, res)=> {
    debugger
    Beer.findById(req.params.beerId)
        .then((beer)=> {
            res.render("beer-detail", {beer:beer})
        })
        .catch((err)=> {
            res.send(err)
        })
})

app.get("/beer/delete/:beerId", (req, res)=> {
    debugger
    Beer.findOneAndRemove(req.params.beerId)
        .then((beer)=> {
            res.redirect("/beers")
        })
        .catch((err)=> {
            res.send(err)
        })
})

module.exports = app