const express = require("express")
const hbs = require('hbs');
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/iron-beer", { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(()=> {
        console.log("connected to mongodb")
    })
    .catch((error)=> {
        console.log("THE DATABASE IS ON FIRE!", error)
    })

const Beer = mongoose.model("Beer", {
    name: String,
    tagline: String,
    first_brewed: String,
    description: String,
    image_url: String
})

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req, res)=> {
    res.send("Working!")
})

app.get("/beers", (req, res)=> {
    debugger
    Beer.find({})
        .then((beers)=> {
            res.render("list-beers", {beers:beers})
        })
        .catch((err)=> {
            res.send(err)
        })
})

app.listen(3000,()=> {
    console.log("App is listening to port", 3000)
})