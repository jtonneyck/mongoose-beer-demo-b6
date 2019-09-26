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

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) 

app.use("/", require("./routes/beers"))
app.use("/", require("./routes/index"))

app.listen(3000,()=> {
    console.log("App is listening to port", 3000)
})