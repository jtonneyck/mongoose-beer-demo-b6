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

app.get("/beer/create", (req, res)=> {
    res.render("create-beer")
})

app.post("/beer/create", (req,res)=> {
    debugger
    console.log(req.body.name)
    var newBeer = new Beer({
            name: req.body.name,
            tagline: req.body.tagline,
            description: req.body.description
        })
    newBeer.save()
        .then((beer)=> {
            debugger
            res.redirect(`/beer/detail?beerId=${beer.id}`)
        })
        .catch((error)=> {
            res.send(error)
        })
    // to do: get post data done
    // to do: create new beer using beer model done
    // to do: redirect user
})

app.get("/beer/detail", (req, res)=> {
    debugger
    Beer.findById(req.query.beerId)
        .then((beer)=> {
            res.render("detail-beer", {beer:beer})
        })
        .catch((err)=> {
            res.send(err)
        })
})

app.get("/beer/delete", (req, res)=> {
    debugger
    Beer.findOneAndRemove(req.query.beerId)
        .then((beer)=> {
            res.redirect("/beers")
        })
        .catch((err)=> {
            res.send(err)
        })
})

module.exports = app