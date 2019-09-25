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

var beersRoute = require("./routes/beers")
app.use("/", beersRoute)
// app.use("/", require("./routes/beers")) the same, but with less code
var indexRoute = require("./routes/index")
app.use("/", indexRoute)
// app.use("/", require("./routes/index")) the same, but with less code

app.listen(3000,()=> {
    console.log("App is listening to port", 3000)
})