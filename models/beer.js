var mongoose = require("mongoose")

const Beer = mongoose.model("Beer", {
    name: String,
    tagline: String,
    first_brewed: String,
    description: String,
    image_url: String
})

module.exports = Beer